import React, { useState, useEffect } from "react";
// import { useState } from "react";

const Header = (props) => {
    const [cart, setcart] = useState();
    useEffect(
        () => {
            let cartnumber = Number(localStorage.getItem("cart"));
            setcart(cartnumber)
        },[props.cartItem]
    )

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-info ">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-3" href="/">
                        Z-kart
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="/">
                                    Disabled
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex">
                        <div className="px-2">Add Item</div>
                        <div className="px-2">
                            <span className="pe-1">
                                Cart
                                {(cart !== 0) ? <span className="ms-1 badge bg-danger">{cart}</span> : " "}
                            </span>
                        </div>
                        <div className="px-2">Wish List</div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
