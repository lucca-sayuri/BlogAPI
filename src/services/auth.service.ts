import { User } from '@prisma/client'
import { createJWT } from '../libs/jwt'
import { create } from 'node:domain'

export const createToken = (user: User) => {
    return createJWT({id: user.id})
}