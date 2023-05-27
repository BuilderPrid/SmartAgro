import React from "react";
import CropItem from "./CropItem";
import { Box, Heading, Divider } from "@chakra-ui/react";
import Crops from "./Crops";
const BookCrops = () => {

    const cropItems = Crops.map((crop) => {
        return (
            <>
                <Box bgColor='#54877a' color='white' width='300px' marginLeft='auto' marginRight='auto' marginBottom='10px' borderRadius='10px'><Heading as='h2' textAlign='center'>
                    Crop - {crop.name}
                </Heading>
                    <Heading as='h3' textAlign='center'>
                        Price - {crop.price}
                    </Heading>
                    <hr></hr>
                </Box>
            </>
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