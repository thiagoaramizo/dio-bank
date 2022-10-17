import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react"
import { User } from "../interfaces/User"
import { formatCurrency } from "../utils/formatData"

interface HomeProps {
    user: User
}

export const Home = ( {user}: HomeProps) => {
    return (
    <Grid templateColumns='1fr 1fr' gap='24px'>
        <Box>
            <Heading color='purple.400'>Bem vindo(a) {user.name}!</Heading>
            <Text>Esta é sua conta.</Text>
        </Box>
        <Box>
            <Text>Seu saldo é de { formatCurrency(user.balance) }</Text>
        </Box>
    </Grid>
    )
}