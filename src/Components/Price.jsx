import { useState } from "react";

import Land from "./Land";
import Time from "./Time";
import Crops from "./Crops";

const Price = ({ price, time, land, count }) => {

    const product = price * land * time * count;

    return (
        <div style={{ marginTop: '300px' }}>
            {/* <Crops value={valueA} setValue={setValueA} />
          <Land value={valueB} setValue={setValueB} />
          <Time value={valueC} setValue={setValueC} />
          <div>Product: {product}</div> */}
            <h2 style={{ textAlign: 'center' }}>
                Total price will be displayed here : {product}
            </h2>
        </div>
    );
}

export default Price;