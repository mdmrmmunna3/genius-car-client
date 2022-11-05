import React from 'react';
import './BannerImge.css';

const BannerImge = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">

            <div className='carousel-img'>
                <img src={image} alt="" className="w-full rounded-lg" />
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-6xl font-bold text-white '>
                    Affordable <br />
                    Price for Car <br />
                    Servicing
                </h1>
            </div>

            {/* text-part with p tag */}
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                <p className='text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>

            {/* btn part */}
            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                <button className="btn btn-warning mr-5">Discover More</button>
                <button className="btn btn-outline btn-warning ">Latest Project</button>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5 hover:btn-warning">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle hover:btn-warning">❯</a>
            </div>
        </div>
    );
};

export default BannerImge;