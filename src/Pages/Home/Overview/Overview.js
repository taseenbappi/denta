import React from 'react';
import overviewImg from '../../../images/overview/overview.png';
import './Overview.css';

const Overview = () => {
    return (
        <div className='container-fluid'>

            <div className="row p-3 justify-content-center align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-3">
                    <img className='img-fluid' src={overviewImg} alt="" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-start p-3">
                    <p className="care-text w-75" >#We Care For Every Patient</p>
                    <h1 className="title py-3">Nervous Troubled Attractive Staring Right Anxiously!</h1>
                    <h4>Contact Us Today <span className="text-primary">+088 123 654 987</span></h4>
                </div>

            </div>
        </div>
    );
};

export default Overview;