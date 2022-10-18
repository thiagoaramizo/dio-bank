import { Box, ChakraProvider } from '@chakra-ui/react'
import { useContext } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

import { Layout } from './components/Layout'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { AppContext, AppContextProvider } from './context/AppContext'
import { NotFound } from './pages/NotFound'
import { getStorage } from './services/storage'

function App() {

  return (
    <ChakraProvider>
      <AppContextProvider>
        <BrowserRouter>
          <Box minHeight='100vh' backgroundColor='gray.800' textColor='gray.300'>

            <Layout>
              <Routes>
                <Route path='/' element={ <Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </Layout>

          </Box>
        </BrowserRouter>
      </AppContextProvider>
    </ChakraProvider>
  )
}

export default App
