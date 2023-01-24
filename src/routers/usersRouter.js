const Router = require('express')
const userController = require('../controllers/userController.js')

const userRoute = new Router()

userRoute.post('/users', userController.createUser)
userRoute.get('/users', userController.getUsers)
userRoute.get('/users/:id', userController.getUser)
userRoute.put('/users', userController.updateUser)
userRoute.delete('/users/:id', userController.deleteUser)

module.exports = userRoute;