import React from "react";
import { useState } from "react";

const Time = () => {
    const [time, settime] = useState(0);
    const ontimechange = (event) => {
        const set_time_value = event.target.value;

        settime(set_time_value);
    }
    return (
        <div style={{ marginTop: '300px' }}>
            <div>
                <h1 style={{ textAlign: 'center' }}>
                    Time you selected = {time}
                </h1>
            </div>
            <input type="range" min='2' max='12' onChange={ontimechange} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
        </div>
    )
}

export default Time;   