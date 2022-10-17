import { User } from "../interfaces/User"

const user: User = {
    name: 'Thiago',
    email: 'aramizo@icloud.com',
    password: '123',
    balance: 3000
}

export const api = new Promise<User>( (resolve)=> {
    setTimeout( () => {
        resolve( user )
    }, 5000)
})