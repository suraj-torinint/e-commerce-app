import React from "react";
import Card from "./Component/Card";
import productData from "./productData";

function App() {
    return (
        <div className="row">
            {productData.map((data) => (
                <Card image={data.image} title={data.title} desc={data.desc} price={data.price} width={data.width} height={data.height} />
            ))}
            
        </div>
    );
}

export default App;
