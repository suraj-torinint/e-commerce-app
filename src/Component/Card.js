import React, { useState } from "react";

const Card = (props) => {
    const [isActive, setIsActive] = useState("col-sm-4 p-5");

    const handleOnClick = () => {
        console.log("delete clicked");
        setIsActive("d-none");
    };

    return (
        <>
            <div className={isActive}>
                <div className="card">
                    <div className="">
                        <button onClick={handleOnClick} type="button" className="btn btn-secondary">
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </div>
                    <div className="text-center">
                        <img src={props.image} className="card-img-top img-thumbnail" style={{ width: "200px", height: "200px" }} alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <a href="#" className="btn btn-primary">
                            Show more
                        </a>
                        <a href="#" className="btn btn-default mx-3">
                            <i className="bi bi-cart"></i>
                        </a>
                        <a href="#" className="btn btn-default">
                            <i className="bi bi-heart"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
