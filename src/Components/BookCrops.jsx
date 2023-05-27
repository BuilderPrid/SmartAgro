import React from "react";
import CropItem from "./CropItem";
import { Box, Heading, Divider, Checkbox, Flex } from "@chakra-ui/react";
import Crops from "./Crops";
const BookCrops = ({ onChildChange }) => {

    function handleChange(index) {
        console.log("clicked")
        onChildChange(index);
    }
    const cropItems = Crops.map((crop, index) => {
        return (
            <Box key={index} bgColor='#54877a' color='white' width='320px' marginLeft='auto' marginRight='auto' marginBottom='10px' borderRadius='10px'>
                <Flex align="center" paddingLeft='30px'>
                    <Checkbox size="lg" onChange={() => handleChange(index)} defaultChecked={false}> <Heading>Crop - {crop.name}<br></br>
                        Price - {crop.price}
                    </Heading>
                    </Checkbox>
                </Flex>
            </Box >

        )
    })
    return (

        <Box >
            <div style={{ marginTop: '100px ' }}></div>
            <hr></hr>
            {cropItems}

        </Box>

        // <div className="crop-encloser">
        //     <p>Hello there</p>
        //     <div>{
        //         Crops.map((crop) => (
        //             <CropItem crop={crop}/>
        //         ))
        //         }
        //         <h2>Hello guys, chai peelo</h2>
        //     </div>
        // </div>

    )
}

export default BookCrops;