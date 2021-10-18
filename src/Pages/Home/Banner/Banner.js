import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner d-flex align-items-center container-fluid">
            <div className="row ">
                <div className="col-lg-8 col-md-8 col-sm-12 col-12  ">
                    <h1 className="banner-title  ">Your Health is Our Top <span className="text-primary">Priority</span></h1>
                    <p className="fs-5 text-primary">A perfect smile guaranteed</p>
                    <button className="btn btn-warning">Make an Appoinment</button>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 col-12">

                </div>
            </div>

        </div>
    );
};

export default Banner;