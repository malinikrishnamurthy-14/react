import React from 'react';
import serviceContent from './service-content';
import { Link } from 'react-router-dom';
import background from '../images/background_1.jpg';


const ServicesList = () => {
    return (
        <React.Fragment>
            <div className="services-list-content">
                <div className="right-content">
                    <img className="services-list-image" src={background}></img>
                </div>
                <div className="left-content">
                    <h1>Services List</h1>
                    {serviceContent.map((service, key) => (
                        <React.Fragment>
                            <Link className="services-list-name" key={key} to={`/service/${service.name}`}>{service.name}</Link>
                            <p>{service.content.substring(0, 300)}...</p>
                        </React.Fragment>
                    ))}
                </div>
                
            </div>
        </React.Fragment>
    )
};

export default ServicesList;