import { Box, ChakraProvider } from '@chakra-ui/react'
import { Layout } from './components/Layout'
import { LoginForm } from './components/LoginForm'

function App() {

  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='gray.800' textColor='gray.300'>
        <Layout>
           <LoginForm/>
        </Layout>
      </Box>

    </ChakraProvider>
  )
}

export default App
