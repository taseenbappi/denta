import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DeService from '../DeService/DeService';
import './DetailsService.css';

const DetailsService = () => {

    const { serviceId } = useParams();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/fakeData/services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    const newService = services.filter(service => serviceId.includes(service._id));



    return (
        <div className="container-fluid p-0" >
            {
                newService.map(serv => <DeService
                    key={serv._id}
                    serv={serv}></DeService>)


            }

        </div>
    );
};

export default DetailsService;