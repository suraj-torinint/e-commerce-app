import React from "react";

const Card = (props) => {
    return (
        <>
            <div className="col-sm-4 p-5">
                <div className="">
                    <div className="card">
                        <div className="">
                            <button type="button" className="btn btn-secondary">
                                <i class="bi bi-x-lg"></i>
                            </button>
                        </div>
                        <div className="text-center">
                            <img
                                src={props.image}
                                className="card-img-top img-thumbnail"
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
                            <a href="#" className="btn btn-default mx-3">
                                <i className="bi bi-cart"></i>
                            </a>
                            <a href="#" className="btn btn-default">
                                <i class="bi bi-heart-fill danger"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
