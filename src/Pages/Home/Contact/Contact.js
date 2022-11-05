import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaRegCalendarAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='bg-black my-20 flex justify-around px-16 py-24 rounded-lg'>
            <div className='flex items-center'>
                <div className='text-4xl mr-3 text-white'>
                    <FaRegCalendarAlt></FaRegCalendarAlt>
                </div>
                <div className='text-white'>
                    <p>We are open Monday-Friday</p>
                    <span className='text-2xl font-bold'>7:00 am - 9:00 pm</span>
                </div>
            </div>

            <div className='flex items-center'>
                <div className='text-4xl mr-3 text-white'>
                    <FaPhoneAlt></FaPhoneAlt>
                </div>
                <div className='text-white'>
                    <p>Have a Question?</p>
                    <span className='text-2xl font-bold'>+2546 251 2658</span>
                </div>
            </div>

            <div className='flex items-center'>
                <div className='text-4xl mr-3 text-white'>
                    <FaMapMarkerAlt></FaMapMarkerAlt>
                </div>
                <div className='text-white'>
                    <p>Need a repair? our address</p>
                    <span className='text-2xl font-bold'>Liza Street, New York</span>
                </div>
            </div>
        </div>
    );
};

export default Contact;