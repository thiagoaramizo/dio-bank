import { Input, Button, Box, Flex, Heading, Text } from "@chakra-ui/react"
import { useState } from "react"
import { login } from "../services/login"

export const LoginForm = () => {

    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        if (email && password) {
            login(email, password)
        } else {
            alert('Informe seu email e senha para realizar o login.')
        }
    }

    return (
        <Box w='400px' marginX='auto'>
            <Heading color='purple.400' pb='24px' textAlign='center'>Faça seu login</Heading>
            <Text pb='24px' textAlign='center' fontSize='sm'>Informe seu e-mail e senha para acessar sua conta</Text>
            <Flex flexDirection='column' gap='24px'>
                <Input type='email' focusBorderColor="purple.600" placeholder='Seu e-mail' value={email} onChange={e => setEmail(e.target.value)} />
                <Input type='password' focusBorderColor="purple.600" placeholder='Sua senha' value={password} onChange={e => setPassword(e.target.value)} />
                <Button mt='24px' bg='purple.600' _hover={{ bg:'purple.400'}} type='submit' onClick={(e) => handleSubmit(e)}>Entrar</Button>
            </Flex>
        </Box>
    )
}