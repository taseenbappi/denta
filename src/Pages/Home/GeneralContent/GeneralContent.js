import React from 'react';
import './GeneralContent.css';

const GeneralContent = () => {
    return (
        <div className='container-fluid g-container'>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 d-flex justify-content-center align-items-center g-body">
                    <div className="p-3">
                        <i class="fas fa-phone-volume g-icon text-warning"></i>
                    </div>
                    <div className="p-3 text-start">
                        <h2>Call +020 8567 0707</h2>
                        <p>51 Uxbridge Road, San Francisco W7 3PX</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 d-flex justify-content-center align-items-center g-body ">
                    <div className="p-3">
                        <i class="far fa-clock g-icon text-warning"></i>
                    </div>
                    <div className="p-3 text-start">
                        <h2>Open Hours</h2>
                        <p>Mon - Sat: 8 am - 5 pm, Sunday: CLOSED</p>

                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 d-flex justify-content-center align-items-center g-body">
                    <div className="p-3">
                        <i class="fas fa-clipboard-list g-icon text-warning"></i>
                    </div>
                    <div className="p-3 text-start">
                        <h2>Make an Appointment</h2>
                        <p>It’s So Fast & Easy</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GeneralContent;