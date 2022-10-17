import { User } from "../interfaces/User"
import { api } from "./api"


export const login = async ( email: string, password: string ) => {
    const user = await api as User
    return user
}