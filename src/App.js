import React, { useState } from "react";
import Card from "./Component/Card";
import productData from "./productData";
import Header from "./Component/Header";

function App() {
    const [cartItem, setcartItem] = useState();
    const func = (cart) => {
        setcartItem(cart)
    };
    return (
        <>
            <Header cartItem={cartItem}/>
            <div className="container">
                <div className="row">
                    {productData.map((data) => (
                        <Card func={func} key={data.id} image={data.image} title={data.title} desc={data.desc} price={data.price} width={data.width} height={data.height} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
