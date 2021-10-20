import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        // this is banner segment
        <div className="banner d-flex align-items-center container-fluid">
            <div className="row ">
                <div className="col-lg-8 col-md-8 col-sm-12 col-12  ">
                    <h1 className="banner-title  ">Your Health is Our Top <span className="text-primary">Priority</span></h1>
                    <p className="fs-4 text-primary">A perfect smile guaranteed</p>
                    <Link to="/appointment"><button className="btn btn-primary shadow text-white">Make an Appoinment</button></Link>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 col-12">

                </div>
            </div>

        </div>
    );
};

export default Banner;