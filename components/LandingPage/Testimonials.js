import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import testimonyList from '../../utils/testimonials';


const Testimonials = () => {
    return (
        <div className="space">
            <h1 className="fancyHeader">Testimonials</h1>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
            >
                {testimonyList.map((singleTestimony) => {
                    return (
                        <div key={singleTestimony.id} className='myCarousel'>
                            <h3>{singleTestimony.name}</h3>
                            <h4>Beneficiary</h4>
                            <p>{singleTestimony.testimony}</p>
                        </div>
                    )
                })}
            </Carousel>
        </div>

    );
};

export default Testimonials;
