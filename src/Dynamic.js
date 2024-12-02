import React, { useState } from "react";
function Dynamic() {
    // let counter = 0;
    let [counter, updateCounter] = useState(0);

    // let [productname, updateName] = useState('Red me note 16');
    // let [price, updateName] = useState(10000);

    let [product, updateName] = useState({
       pname: 'Red me note 16',
       price: 10000
    });
    return (
        <>
                <h1>Counter value: { counter }</h1>
                {/* <button onClick={updateCounter}>Change</button> */}
                <button onClick={() => {
                    updateCounter(++counter);
                }}>Change</button>


                <h1>Product name: {product.pname}</h1>
                <p>Price : {product.price}</p>
                <p>Product : {JSON.stringify(product)}</p>
                <input id="pname"/>
                <input id="price"/>
                <button onClick={() => {
                    let pname = document.getElementById('pname').value;
                    let price = document.getElementById('price').value;
                    // updateName(() => {
                    //     return pname
                    // })
                    updateName({
                        ...product, //previous state incase if we want modfy any value we can
                        pname: pname,
                        price :price
                    })
                }}>Update</button>
        </>
    )

    // function updateCounter(){
    //     ++counter;
    //     console.log(counter);
    // }
}

export default Dynamic;

//state - > class component
//usestate -> functional component