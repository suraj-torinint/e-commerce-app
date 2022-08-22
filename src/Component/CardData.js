import React from "react";
import Card from "./Card"

const CardData = (props) => {
    const func = (cartData) => {
        props.func(cartData);
    };

    return <>{props.items.length !== 0 ? props.items.map((data) => <Card func={func} key={data.id} image={data.image} title={data.title} desc={data.desc} price={data.price} width={data.width} height={data.height} />) : <h1>No Data Found</h1>}</>;
};

export default CardData;
