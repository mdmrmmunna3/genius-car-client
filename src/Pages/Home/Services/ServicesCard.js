import React from 'react';
import { FaArrowRight, FaDollarSign } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const {_id, img, title, price } = service
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl p-4">
                <figure><img className='h-52' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">{title}</h2>
                    <div className='flex justify-between'>

                        <p className='flex text-orange-400 font-semibold' style={{ fontSize: '20px' }}>Price: <FaDollarSign></FaDollarSign>{price}</p>
                        <span className='text-xl'><FaArrowRight className='text-orange-400'></FaArrowRight></span>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`checkout/${_id}`}><button className="btn btn-primary">Check Out</button></Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ServicesCard;