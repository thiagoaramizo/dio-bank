import { Box, Button, Flex, Grid, Heading, Link, Text } from "@chakra-ui/react"
import { Dispatch, SetStateAction } from "react"
import { Link as ReactLink } from 'react-router-dom'
import styled from "styled-components"
import { User } from "../interfaces/User"

interface HeaderProps {
    user: User | undefined,
    setUser: Dispatch<SetStateAction<User | undefined>>
}

export const Header = ( {user, setUser}: HeaderProps ) => {
    return (
        <HeaderWrapper>
            <Grid w='100vw' p='32px' gridTemplateColumns='200px 1fr'>
                <Heading fontSize='xl'>DIO Bank</Heading>
                <Flex justifyContent='flex-end' gap='32px' color='purple.500'>
                    <Text>Sobre</Text>
                    { user ? <Text>Minha conta</Text> : <Text>Entrar</Text> }
                    { user ? <Text onClick={e => setUser(undefined)} cursor='pointer'>Sair</Text>
                    : ''}
                </Flex>
            </Grid>   
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    
`