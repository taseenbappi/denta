import React from 'react';
import './Doctors.css';
import doctor1 from '../../images/doctors/doctor-2.jpg';
import doctor2 from '../../images/doctors/doctor-3.jpg';
import doctor3 from '../../images/doctors/doctor-4.jpg';

const Doctors = () => {

    return (
        <div className="container-fluid p-0 bg-light" >
            <div className="details-title d-flex align-items-center justify-content-center ">
                <h1 className="text-white">Our Doctors</h1>
            </div>
            <div className="container row row-cols-1 row-cols-md-3 g-4 m-auto py-3">
                <div className="col">
                    <div className="card h-100 shadow-sm">
                        <img src={doctor1} className="card-img-top img-fluid p-2" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Johnson Melbourne</h5>
                            <p className="card-text">Aesthetic Dentistry.</p>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow-sm">
                        <img src={doctor2} className="card-img-top img-fluid p-2" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Ena Dicrosa</h5>
                            <p className="card-text">Prosthodontics Dentist</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow-sm">
                        <img src={doctor3} className="card-img-top img-fluid p-2" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Addison Smith</h5>
                            <p className="card-text">Gastroenterologists</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Doctors;