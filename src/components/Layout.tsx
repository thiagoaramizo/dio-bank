import { Box, Grid } from "@chakra-ui/react"
import { ReactNode } from "react"
import styled from "styled-components"
import { Footer } from "./Footer"
import { Header } from "./Header"

interface LayoutProps {
    children: ReactNode
}

export const Layout = ( {children }: LayoutProps) => {

    return (
        <LayoutWrapper>
            <Grid gridTemplateColumns={'100vw'} minHeight='100vh' >
                <Header/>
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