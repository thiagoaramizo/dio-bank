import { Box, Flex, Grid } from "@chakra-ui/react"
import { Dispatch, ReactNode, SetStateAction } from "react"
import styled from "styled-components"
import { User } from "../interfaces/User"
import { Footer } from "./Footer"
import { Header } from "./Header"

interface LayoutProps {
    children: ReactNode,
    user: User | undefined,
    setUser: Dispatch<SetStateAction<User | undefined>>
}

export const Layout = ( {children, user, setUser}: LayoutProps) => {
    return (
        <LayoutWrapper>
            <Grid gridTemplateColumns={'100vw'} minHeight='100vh' >
                <Header user={user} setUser={setUser}/>
                <Box p='32px'>
                    {children}
                </Box>
                <Footer />
            </Grid>
        </LayoutWrapper>
    )
}

const LayoutWrapper = styled.div`
    
`