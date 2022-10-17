import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react"
import styled from "styled-components"

export const Header = () => {
    return (
        <HeaderWrapper>
            <Grid w='100vw' p='32px' gridTemplateColumns='200px 1fr'>
                <Heading fontSize='xl'>DIO Bank</Heading>
                <Flex justifyContent='flex-end' gap='32px' color='purple.500'>
                    <Text>Sobre</Text>
                    <Text>Acessar conta</Text>
                </Flex>
            </Grid>   
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    
`