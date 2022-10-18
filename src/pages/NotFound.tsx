import { Box, Center, Grid, Heading, Text } from "@chakra-ui/react"

interface HomeProps {
}

export const NotFound = () => {

    return (
        <Box>
            <Heading color='purple.400' fontSize='9xl' textAlign='center'>404</Heading>
            <Text textAlign='center'>Página não encontrada</Text>
        </Box>
    )
}