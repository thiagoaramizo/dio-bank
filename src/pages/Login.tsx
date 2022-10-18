import { Input, Button, Box, Flex, Heading, Text } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import { User } from "../interfaces/User"
import { api } from "../services/api"
import { createStorage } from "../services/storage"

export const Login = () => {

    const [email, setEmail] = useState<string>()
    const [erroEmail, setErroEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const navigate = useNavigate()
    const { setIsLoggedIn, isLoggedIn } = useContext( AppContext )

    useEffect( () => {
        isLoggedIn && navigate('/home')
    }, [isLoggedIn])

    const login = async ( email: string, password: string ) => {
        //TODO alterar para validadr na API
        api.then( ( apiUser ) => {
            setIsLoggedIn(true)
            createStorage( '12345' )
            return true
        }).catch( () => {
            return false
        })        
    }

    const validarEmail = ( email: string ) => {
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if( !regex.test(email) ){
            setErroEmail('Formato de e-mail inválido.')
        } else {
            setErroEmail('')
        }
    }

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
                <Input type='email' focusBorderColor="purple.600" placeholder='Seu e-mail' value={email} onChange={e => setEmail(e.target.value)} onBlur={ e => validarEmail(e.target.value)} />
                { erroEmail ? <Text fontSize='sm'>{erroEmail}</Text> : ''}
                <Input type='password' focusBorderColor="purple.600" placeholder='Sua senha' value={password} onChange={e => setPassword(e.target.value)} />
                <Button mt='24px' bg='purple.600' _hover={{ bg:'purple.400'}} type='submit' onClick={(e) => handleSubmit(e)}>Entrar</Button>
            </Flex>
        </Box>
    )
}