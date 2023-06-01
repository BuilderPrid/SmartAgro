import FullScreenSection from "../Layouts/FullScreenContent"
import { Button, Grid, GridItem, Text, ButtonGroup } from "@chakra-ui/react"
import BookCrops from "./BookCrops"
import Price from "./Price"
import { useState } from "react"
function Bookings() {
    const [page, setPage] = useState('crops')
    const [selected, setSelected] = useState(
        [false, false, false, false, false]
    )
    const [time, setTime] = useState(0);
    const [land, setLand] = useState(0);
    function handleClick(event) {
        if (event.target.value === 'crops')
            setPage('crops');
        else if (event.target.value === 'price')
            setPage('price')
        else
            setPage('time')
        console.log('clicked', page)
    }
    const ontimechange = (event) => {
        const set_time_value = event.target.value;

        setTime(set_time_value);
    }
    const onlandchange = (event) => {
        const set_time_value = event.target.value;

        setLand(set_time_value);
    }

    const handleChildChange = (index) => {
        console.log(selected)
        setSelected((selected) => {
            const newSelected = selected
            newSelected[index] = !newSelected[index]
            return newSelected
        })
    }

    function handleDataPass(time, land) {
        setLand(land)
        setTime(time)
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
                        <div style={{ display: page === "crops" ? "block" : "none" }}>
                            <BookCrops onChildChange={handleChildChange} />
                        </div>
                        <div style={{ display: page === "time" ? "block" : "none" }}>
                            <div style={{ marginTop: '300px' }}>
                                <div>
                                    <h1 style={{ textAlign: 'center' }}>
                                        Time you selected = {time}
                                    </h1>
                                </div>
                                <input type="range" min='2' defaultValue='0' max='12' onChange={ontimechange} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                                <div>
                                    <h1 style={{ textAlign: 'center' }}>
                                        Land you selected(in acre) = {land}
                                    </h1>
                                </div>
                                <input type="range" min='2' defaultValue='0' max='12' onChange={onlandchange} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                            </div>
                        </div>
                        <div style={{ display: page === "price" ? "block" : "none" }}>
                            <Price price='46' time={time} land={land} count={selected.filter(value => value === true).length} />
                        </div>
                    </GridItem>
                    {/* <GridItem colSpan={2} bg='papayawhip' />
                        <GridItem colSpan={4} bg='tomato' /> */}
                </Grid>
            </FullScreenSection >
        </>

    )
}
export default Bookings