import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react"
import { User } from "../interfaces/User"
import { api } from "../services/api"
import { getStorage } from "../services/storage"

interface IAppContext {
    user: undefined | User
    setUser: Dispatch<SetStateAction<User | undefined>>
    isLoggedIn: boolean
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>
  }

export const AppContext = createContext( {} as IAppContext)

export const AppContextProvider = ({children} : any) => {

  const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
  const [ user, setUser ] = useState<User>()

  useEffect( () => {
    if ( getStorage() ) {
      //TODO alterar para validadr na API
      api.then( () => {
        setIsLoggedIn(true)
      })
    }
  }, [])

  return (
    <AppContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn}}>
      {children}
    </AppContext.Provider>
  )
}