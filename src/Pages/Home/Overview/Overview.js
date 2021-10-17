import React from 'react';
import overviewImg from '../../../images/overview/overview.png';

const Overview = () => {
    return (
        <div className='py-5 container-fluid'>

            <div className="row p-3 justify-content-center align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 ">
                    <img src={overviewImg} alt="" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-start ">
                    <button className="btn btn-dark"> We Care For Every Patient</button>
                    <h1 className="title py-3">Nervous Troubled Attractive Staring Right Anxiously!</h1>
                    <h4>Contact Us Today <span className="text-primary">+088 123 654 987</span></h4>
                </div>

            </div>
        </div>
    );
};

export default Overview;