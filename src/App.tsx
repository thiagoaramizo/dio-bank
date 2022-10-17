import { Box, ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Layout } from './components/Layout'
import { LoginForm } from './pages/LoginForm'
import { User } from './interfaces/User'
import { Home } from './pages/Home'


function App() {

  const [user, setUser] = useState<User>()

  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='gray.800' textColor='gray.300'>
        <Layout user={user} setUser={setUser}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={ 
                user? <Home user={user}/> : <LoginForm setUser={setUser}/>
              }></Route>
            </Routes>
          </BrowserRouter>
        </Layout>
      </Box>

    </ChakraProvider>
  )
}

export default App
