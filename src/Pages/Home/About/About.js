import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-2/4 relative'>
                    <img src={person} alt='' className="rounded-lg shadow-2xl w-4/5 h-full" />
                    <img src={parts} alt='' className="rounded-lg shadow-2xl absolute border-r-8 w-3/5 right-12 top-1/2" />
                </div>
                <div className='w-2/4'>
                    <p className='font-bold text-2xl text-orange-500 my-5'>About Us</p>
                    <h1 className="text-5xl font-bold">
                        We are qualified <br />
                        & of experience <br />
                        in this field
                    </h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='py-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-primary ">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;