const express = require('express')

const routes = express.Router()

//Middleware de idade
const ageMiddleware = require('./app/middlewares/age')

//IMPORTA OS CONTROLADORES DAS TELAS
const UserController = require('./app/controllers/UserController')

// routes.use((req, res, next) => {
//   res.locals.flashSuccess = req.flash('success')
//   res.locals.flashError = req.flash('error')

//   return next()
// })

//TELA DE INICIO
routes.get('/', UserController.create)
routes.post('/check', UserController.store)


//TODAS AS ROTAS INICIADAS COM APP ESTÃO PROTEGIDAS POR IDADE
routes.use('/app', ageMiddleware)

//TELAS DE IDADE
routes.get('/app/major', UserController.index)
routes.get('/app/minor', UserController.index)

//SAI DA SESSÃO
routes.get('/app/logout', UserController.delete)

module.exports = routes
