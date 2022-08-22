import React, { useState } from "react";
import Header from "./Component/Header";
import AddItem from "./Component/Additem";
import productData from "./productData";
import CardData from "./Component/CardData";

let dummyData = productData;

function App() {
    const [items, setItems] = useState([...dummyData]);

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
                    <CardData func={func} items={items} />
                </div>
                <AddItem sendData={sendData} />
            </div>
        </>
    );
}

export default App;
