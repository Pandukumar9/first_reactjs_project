import React, { useState } from 'react';
import './Counter.css';

function Counter() {
    let [counterr ,setCounter] = useState(0);
    let stock = 10;

    return(
        <div className="wrapper">
            <h2>Counter app in reactjs</h2>
            <button className='btn btn-primary'>test</button>
           <button className='minus' disabled={counterr === 0} onClick={() => {
              if(counterr > 0){
                setCounter(counterr - 1);
              }
           }}>-</button>
           <p> {counterr}</p>
           <button className='plus' disabled={counterr === stock} onClick={() => {
              if(counterr < stock){
                setCounter(counterr + 1);
              }
           }}>+</button>
        </div>
    )
}

export default Counter;