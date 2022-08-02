import React from "react";

const Card = (props) => {
    return (
        <>
            <div className="col-sm-4 scard p-5">
                <div className="">
                    <div className="card">
                        <div className="text-center pt-3">
                            <img
                                src={props.image}
                                className="card-img-top"
                                style={{ width: "200px", height: "200px" }}
                                alt="..."
                            />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.desc}</p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
