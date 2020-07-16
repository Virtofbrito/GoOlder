const { User } = require('..\\models')
//deu erro aqui
class UserController {
  create (req, res) {
    //PEGA HTML DA PAGINA
    return res.render('auth/check')
  }

  async store (req, res) {
    if (req.body.age == "") {
      //req.flash('error', 'Insira uma idade válida')
      return res.redirect('/')
    }
    const user = await User.create({ ... req.body })
    req.session.user = user
    console.log(req.params)
    if (req.session.user.age > 17) {

      return res.redirect('/app/major')
    } else if (req.session.user.age < 18){

      return res.redirect('/app/minor')
    }
  }

  async index (req, res) {
    //separa os usuários que são PROVIDERS
    // const providers = await User.findAll({ where: { provider: true}})
    // return res.render('dashboard', { providers })
    console.log(res.locals.user)
    return res.render('dashboard', { Group: res.locals.group, Age: req.session.user.age})
  }

  async delete (req, res) {
    req.session.destroy(() => {
      res.clearCookie('root')
      return res.redirect('/')
    })
  }
}

module.exports = new UserController()
