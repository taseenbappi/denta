import React from 'react';
import './Service.css';

const Service = (props) => {
    const { title, description, image, cost } = props.serviceItem;
    return (
        <div className="col p-3 ">
            <div className="card h-100 service-card ">
                <img className="img-fluid service-img" src={image} alt="" />
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{description}</p>
                    <p>Cost: $ {cost}</p>
                </div>
                <div className="card-footer d-flex justify-content-between bg-white">
                    <button className="btn btn-warning">Add to cart</button>
                    <button className="btn btn-warning">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Service;