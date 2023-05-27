
import { Box, Button, ButtonGroup, HStack, Heading, Link } from '@chakra-ui/react'
import FullScreenSection from './FullScreenContent'
import LinkButton from './LinkButton';
function Home() {

    return (
        <>
            <FullScreenSection
                // backgroundColor="#14532d"
                // isDarkBackground
                p={8}
                alignItems="flex-start"
                spacing={8}
            >
                <Heading as="h1" alignContent='center' marginLeft='auto' marginRight='auto'>
                    Welcome To Agro India
                </Heading>
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(2,minmax(0,1fr))"
                    gridGap={8}
                >
                </Box>
                <HStack spacing={4} m={4} >
                    <ButtonGroup gap={20} marginTop={40}>
                        <LinkButton to='/bookings'>Bookings</LinkButton>
                        <LinkButton>Booked</LinkButton>
                        <LinkButton to={'/bookings'}>Analysis</LinkButton>
                    </ButtonGroup>
                </HStack>
            </FullScreenSection>
        </>
    )
}

export default Home;