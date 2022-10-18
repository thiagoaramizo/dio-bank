
export const getStorage = () : string | null => {
    return localStorage.getItem('token')
} 

export const createStorage = (token: string) : void => {
    localStorage.setItem('token', token)
}


export const deleteStorage = () : void => {
    localStorage.clear()
}