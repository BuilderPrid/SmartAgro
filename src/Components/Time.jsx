import { Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const Time = ({ onChildChange }) => {
    const [time, settime] = useState(0);
    const [land, setland] = useState(0);

    return (
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
            <Button colorScheme="teal" display='block' marginRight='auto' marginLeft='auto' onSubmit={passData}>Submit</Button>
        </div>
    )
}

export default Time;   