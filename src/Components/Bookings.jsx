import FullScreenSection from "./FullScreenContent"
import { Button, Grid, GridItem, Text, ButtonGroup } from "@chakra-ui/react"
import BookCrops from "./BookCrops"
import Time from "./Time"
import Price from "./Price"
import { useState } from "react"
function Bookings() {
    const [page, setPage] = useState('crops')
    function handleClick(event) {
        if (event.target.value === 'crops')
            setPage('crops');
        else if (event.target.value === 'price')
            setPage('price')
        else
            setPage('time')
        console.log('clicked', page)
    }
    return (
        <>
            <FullScreenSection
                isDarkBackground
                p={8}
                alignItems="flex-start"
                spacing={8}
            >
                <Grid
                    h='100vh'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={4}
                    width='100%'

                >
                    <GridItem rowSpan={2} colSpan={1} justifyContent='center' paddingTop='150px'>
                        <ButtonGroup gap='4' flexDirection='column'>
                            <Button colorScheme='teal' variant='solid' fontSize='40px' p='40px' h='110px' value='crops' onClick={(e) => (handleClick(e))}>All the crops<br></br> available</Button>
                            <Button colorScheme='teal' variant='solid' fontSize='40px' p='40px' width='300px' h='110px' value='time' onClick={(e) => (handleClick(e))}>Time for each<br></br> crop</Button>
                            <Button colorScheme='teal' variant='solid' fontSize='40px' p='40px' width='300px' h='110px' value='price' onClick={(e) => (handleClick(e))}>Price for each <br></br>acre you add</Button>
                        </ButtonGroup>
                    </GridItem>
                    <GridItem rowSpan={2} colSpan={4} color='black' borderRadius='20px' m='-20px'>
                        {page === 'crops' && <BookCrops></BookCrops>}
                        {page === 'time' && <Time></Time>}
                        {page === 'price' && <Price></Price>}
                    </GridItem>
                    {/* <GridItem colSpan={2} bg='papayawhip' />
                        <GridItem colSpan={4} bg='tomato' /> */}
                </Grid>
            </FullScreenSection >
        </>

    )
}
export default Bookings