import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    // service data destructuring
    const { _id, title, description, image, cost } = props.serviceItem;
    // dynamic uri
    const uri = `/detailsService/${_id}`;
    return (
        // service card
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
                    <Link className="btn btn-warning" to={uri}  >Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;