import React from 'react';
import './Appointment.css';


const Appointment = () => {
    const handleAppoinment = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container-fluid p-0" >
            <div className="appointment-title d-flex align-items-center justify-content-center ">
                <h1 className="text-white">Get Your Appointment Now!</h1>
            </div>
            <div className="row p-5 container">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-5 text-start shadow">
                    <form onSubmit={handleAppoinment}>
                        <div className="mb-3">
                            <i className="fas fa-user-edit pe-2 text-info"></i>
                            <input type="text" className=" input-style" id="name" placeholder="Enter your full name" />

                        </div>

                        <div className="mb-3">
                            <i className="fas fa-mobile-alt pe-2 text-info"></i>
                            <input type="number" className=" input-style" id="name" placeholder="+88-017******" />
                        </div>

                        <div className="mb-3">
                            <i className="fas fa-baby pe-2 text-info"></i>
                            <input type="number" className=" input-style" id="name" placeholder="Enter Your Age" />
                        </div>

                        <div className="mb-3">
                            <i className="fas fa-at pe-2 text-info"></i>
                            <input type="email" className=" input-style" id="email" placeholder="Enter your email" />

                        </div>
                        <input type="submit" value="Send" className="btn btn-outline-success" />
                    </form>

                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-start p-5">
                    <div className="p-5 bg-light  details-subtitle" >
                        <h5>Choice your day & Time</h5>
                        <ul >
                            <li><strong>Monday:</strong> 7:00 am – 7:00 pm</li>
                            <li><strong>tuesday:</strong> 7:00 am – 7:00 pm</li>
                            <li><strong>wednesday:</strong> 8:00 am – 5:00 pm</li>
                            <li><strong>thursday:</strong> 8:00 am – 4:00 pm</li>
                            <li><strong>friday:</strong> 7:00 am – 7:00 pm</li>
                            <li><strong>saturday:</strong> Closed</li>
                            <li><strong>sunday:</strong> Closed</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Appointment;