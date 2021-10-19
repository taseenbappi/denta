import React from 'react';
import { useParams } from 'react-router';
import './DetailsService.css';

const DetailsService = () => {
    const { serviceId } = useParams();

    return (
        <div className="container-fluid p-0" >
            <div className="details-title d-flex align-items-center justify-content-center ">
                <h1 className="text-white">Cavity Protection</h1>
            </div>
            <div className="row p-5 container">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-5 text-start">
                    <h1 className="details-subtitle">Cavity Protection</h1>
                    <p className='text-secondary'>We are use medication to help patients relax during dental procedures. It’s sometimes referred to as “sleep dentistry,” although that’s not entirely accurate. Patients are usually awake with the exception of those who are under general anesthesia.</p>

                    <div>
                        <p className='text-secondary'>The levels of sedation used include:</p>
                    </div>
                    <div className='text-secondary'>
                        <ul>
                            <li>Minimal sedation – you are awake but relaxed.</li>
                            <li>Moderate sedation (formerly called “conscious sedation”) – you may slur your words when speaking and not remember much of the procedure.</li>
                            <li>Deep sedation – you are on the edge of consciousness but can still be awakened.</li>
                            <li>General anesthesia – you are completely unconscious.</li>
                        </ul>
                    </div>

                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-start p-5">
                    <div className="p-5 bg-light  details-subtitle" >
                        <h5>Meet Time</h5>
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

export default DetailsService;