import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { title, description, image, cost } = props.serviceItem;
    return (
        <div className="col p-3 ">
            <div className="card h-100 service-card ">
                <img className="img-fluid service-img " src={image} alt="" />
                <div className="card-body text-start pb-0">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{description}</p>
                    <p className="mb-0 fw-bolder">Cost: ${cost}</p>
                </div>
                <div className=" d-flex justify-content-between p-3 ">
                    <button className="btn btn-warning">Add to cart</button>
                    <Link className="btn btn-warning" to="/detailsService" >Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;