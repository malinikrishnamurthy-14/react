import React from 'react';
import serviceContent from './service-content';
import NotFound from './NotFound';

const Service = ({match}) => {
    const name = match.params.name;
    const service = serviceContent.find(service => service.name === name);
    if (service){
        return (<React.Fragment>
            <h1>This is the {service.name} service page</h1>
            <p>{service.content}</p>
            <p>{service.author}</p>
        </React.Fragment>)
    }else{
        return (<NotFound />)
    }
}

export default Service;