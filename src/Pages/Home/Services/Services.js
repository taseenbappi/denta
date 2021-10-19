import React from 'react';
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services] = useServices();
    return (
        <div className="container-fluid py-5 " id="services">
            <h1 className="m-auto"> OUR <span className="service-txt">SERVICES</span> <hr className='w-25 m-auto' /></h1>
            <div className="container row row-cols-1 row-cols-md-3 g-4 pt-3 m-auto">
                {
                    services.map(serviceItem => <Service
                        key={serviceItem._id}
                        serviceItem={serviceItem}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;