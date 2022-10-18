import { Flex, Grid, Heading, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { AppContext } from "../context/AppContext"
import { deleteStorage } from "../services/storage"


export const Header = () => {

    const {user, setIsLoggedIn, setUser } = useContext( AppContext )
    const navigate = useNavigate()

    const logout = () => {
        setIsLoggedIn(false)
        setUser( undefined )
        deleteStorage()
        navigate('/')
    }

    return (
        <HeaderWrapper>
            <Grid w='100vw' p='32px' gridTemplateColumns='200px 1fr'>
                <Heading fontSize='xl'>DIO Bank</Heading>
                <Flex justifyContent='flex-end' gap='32px' color='purple.300'>
                    <Text>Sobre</Text>
                    { user ? <Text>Minha conta</Text> : <Text>Entrar</Text> }
                    { user ? <Text onClick={e => logout()} cursor='pointer'>Sair</Text>
                    : ''}
                </Flex>
            </Grid>   
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    
`