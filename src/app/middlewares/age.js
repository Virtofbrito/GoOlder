const { locals } = require("../../server")

module.exports = (req, res, next) => {
  // if (existe uma sessão && o usuário declarou idade)
  //res.locals.user envia todas as informações do usuario pra qualquer uma das views em que tiver {{ user }}

  if (req.session && req.session.user) {
    if (req.session.user.age > 17){
      res.locals.group = 'maior'
      res.locals.user = req.session.user
      return next()
    }else if (req.session.user.age < 18){
      res.locals.group = 'menor'
      res.locals.user = req.session.user
      return next()
    }else {
      return res.redirect('/')
    }
  }

  return res.redirect('/')

}
