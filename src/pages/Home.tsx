import { Box, Grid, Heading, Text } from "@chakra-ui/react"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import { User } from "../interfaces/User"
import { api } from "../services/api"
import { formatCurrency } from "../utils/formatData"

interface HomeProps {
}

export const Home = () => {

    const navigate = useNavigate()
    const { user, isLoggedIn, setUser } = useContext(AppContext)
 
    useEffect(() => {
        !isLoggedIn && navigate('/')
        api.then( (apiUser : User) => {
            setUser(apiUser)
        })
    }, [])

    return (
    <Grid templateColumns='1fr 1fr' gap='24px'>
        <Box>
            <Heading color='purple.400'>Bem vindo(a) {user?.name}!</Heading>
            <Text>Esta é sua conta.</Text>
        </Box>
        <Box>
            <Text>Seu saldo é de { user? formatCurrency(user.balance): '' }</Text>
        </Box>
    </Grid>
    )
}