import React, { useState } from "react";
import Card from "./Component/Card";
import Header from "./Component/Header";
import AddItem from "./Component/Additem";
import productData from "./productData";

function App() {
    const [cartItem, setcartItem] = useState();
    const func = (cart) => {
        setcartItem(cart);
    };
    return (
        <>
            <Header cartItem={cartItem} />
            <div className="container">
                <div className="row">
                    {productData.length !== 0 ? productData.map((data) => <Card func={func} key={data.id} image={data.image} title={data.title} desc={data.desc} price={data.price} width={data.width} height={data.height} />) : <h1>No Data Found</h1>}
                </div>
                <AddItem />
            </div>
        </>
    );
}

export default App;
