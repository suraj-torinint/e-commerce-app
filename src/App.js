import React from "react";
import Card from "./Component/Card";
import productData from "./productData";

function App() {
    return (
        <div className="row">
            <Card image={productData[0].image} title={productData[0].title} desc={productData[0].desc} />
            <Card image={productData[1].image} title={productData[1].title} desc={productData[1].desc} />
            <Card image={productData[2].image} title={productData[2].title} desc={productData[2].desc} />
            <Card image={productData[3].image} title={productData[3].title} desc={productData[3].desc} />
            <Card image={productData[4].image} title={productData[4].title} desc={productData[4].desc} />
        </div>
    );
}

export default App;
