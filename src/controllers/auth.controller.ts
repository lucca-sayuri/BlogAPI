import { RequestHandler } from 'express'

export const signin: RequestHandler = (req, res) => {
    //lógica pra autenticar o usuário
}

export const signup: RequestHandler = (req, res) => {
    //lógica pra registrar um novo usuário
}

export const validate: RequestHandler = (req, res) => {
    //lógica pra validar o token de autenticação
}