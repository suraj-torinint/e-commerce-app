import React, { useState } from "react";
import Card from "./Component/Card";
import Header from "./Component/Header";
import AddItem from "./Component/Additem";
import productData from "./productData";

let dummyData = productData;

function App() {
    const [items, setItems] = useState(dummyData);

    const [cartItem, setcartItem] = useState();
    const func = (cart) => {
        setcartItem(cart);
    };

    const sendData = (numberOfItems) => {
        console.log(numberOfItems);
        let updatedData = [numberOfItems, ...items];
        setItems(updatedData);
    };
    return (
        <>
            <Header cartItem={cartItem} />
            <div className="container">
                <div className="row">
                    {items.length !== 0 ? items.map((data) => <Card func={func} key={data.id} image={data.image} title={data.title} desc={data.desc} price={data.price} width={data.width} height={data.height} />) : <h1>No Data Found</h1>}
                </div>
                <AddItem sendData={sendData} />
            </div>
        </>
    );
}

export default App;
