import { useState } from "react";

import Land from "./Land";
import Time from "./Time";
import Crops from "./Crops";

const Price = () => {

    const [valueA, setValueA] = useState(0);
    const [valueB, setValueB] = useState(0);
    const [valueC, setValueC] = useState(0);

    const product = valueA * valueB * valueC;

    return (
        <div style={{ marginTop: '300px' }}>
            {/* <Crops value={valueA} setValue={setValueA} />
          <Land value={valueB} setValue={setValueB} />
          <Time value={valueC} setValue={setValueC} />
          <div>Product: {product}</div> */}
            <h2 style={{ textAlign: 'center' }}>
                Total price will be displayed here : 100000000
            </h2>
        </div>
    );
}

export default Price;