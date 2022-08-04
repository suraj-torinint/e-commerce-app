import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./Component/Header";
import Card from "./Component/Card";
import productData from "./productData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Header />
        <div className="container">
            <div className="row">
                <Card image={productData[0].image} title={productData[0].title} desc={productData[0].desc} price={productData[0].price}/>
                <Card image={productData[1].image} title={productData[1].title} desc={productData[1].desc} price={productData[1].price}/>
                <Card image={productData[2].image} title={productData[2].title} desc={productData[2].desc} price={productData[2].price}/>
                <Card image={productData[3].image} title={productData[3].title} desc={productData[3].desc} price={productData[3].price}/>
                <Card image={productData[4].image} title={productData[4].title} desc={productData[4].desc} price={productData[4].price}/>
                <App />
            </div>
        </div>
    </React.StrictMode>
);
