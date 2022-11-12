import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://genius-car-server-seven-puce.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-12'>
                <p className='text-orange-600 font-bold'>Services</p>
                <h2>Our Service Area</h2>
                <p>the majority have suffered alteration in some form,  by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
           <div className='text-center'> <button className="btn btn-outline btn-error my-12">More Service</button></div>
        </div>
    );
};

export default Services;