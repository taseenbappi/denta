import React from 'react';
import { useParams } from 'react-router';
import './DetailsService.css';

const DetailsService = () => {
    const { serviceId } = useParams();

    return (
        <div className="details-service" >
            <h1>Service ID is:{serviceId} </h1>
        </div>
    );
};

export default DetailsService;