import { Router } from 'express'
import * as authController from '../controllers/auth.controller'

export const authRoutes = Router()

authRoutes.post('/signin', authController.signin)
authRoutes.post('/signup', authController.signup)
authRoutes.post('/validate', authController.validate)   