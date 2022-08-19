import React, { useState } from "react";
import productData from "../productData";

const AddItem = () => {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");

    const idInput = (event) => {
        setId(event.target.value);
    };

    const titleInput = (event) => {
        setTitle(event.target.value);
    };

    const priceInput = (event) => {
        setPrice(event.target.value);
    };

    const descInput = (event) => {
        setDesc(event.target.value);
    };

    const widthInput = (event) => {
        setWidth(event.target.value);
    };

    const heightInput = (event) => {
        setHeight(event.target.value);
    };

    const imageInput = (event) => {
        setImage(event.target.value);
    };

    const submitForm = (event) => {
        event.preventDefault();
        const product = {
            id: Number(id),
            image: image,
            title: title,
            desc: desc,
            price: price,
            width: width + "px",
            height: height + "px",
        };

        productData.push(product);
        let data = JSON.stringify(product);
        console.log(data);
        console.log(product);
        console.log(productData.length);
        setId("");
        setTitle("");
        setPrice("");
        setDesc("");
        setImage("");
        setWidth("");
        setHeight("");
    };

    const clearForm = (event) => {
        event.preventDefault();
        setId("");
        setTitle("");
        setPrice("");
        setDesc("");
        setImage("");
        setWidth("");
        setHeight("");
    };

    // productData.push(setData);

    return (
        <>
            <div className="container p-5">
                <div className="p-4 card card-body">
                    <form className="row g-3">
                        <div className="col-md-2">
                            <label htmlFor="inputId" className="form-label">
                                Id
                            </label>
                            <input type="number" name="id" value={id} onChange={idInput} className="form-control" id="inputId" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputEmail4" className="form-label">
                                Title
                            </label>
                            <input type="text" name="title" value={title} onChange={titleInput} className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputPassword4" className="form-label">
                                Price
                            </label>
                            <input type="text" name="price" value={price} onChange={priceInput} className="form-control" id="inputPassword4" />
                        </div>
                        <div className="">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                Description
                            </label>
                            <textarea name="desc" value={desc} onChange={descInput} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">
                                Image
                            </label>
                            <input name="image" value={image} onChange={imageInput} type="file" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputState" className="form-label">
                                Width
                            </label>
                            <input type="text" name="width" value={width} onChange={widthInput} className="form-control" id="inputState" />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputZip" className="form-label">
                                Height
                            </label>
                            <input type="text" name="height" value={height} onChange={heightInput} className="form-control" id="inputZip" />
                        </div>

                        <div className="col-12">
                            <button type="submit" onClick={submitForm} className="btn btn-primary me-4">
                                Submit
                            </button>
                            <button type="submit" onClick={clearForm} className="btn btn-primary">
                                Clear
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddItem;
