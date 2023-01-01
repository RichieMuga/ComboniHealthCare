import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import girlImage from '../../public/assets/prototypePictures/children/smallGirlSmile.jpg'
import boyImage from '../../public/assets/prototypePictures/children/smallboysmile.jpg'
import Image from 'next/image'


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
                <div>
                    <Image src={girlImage} width={139} height={139} />
                    <div className="myCarousel">
                        <h3>Shirley</h3>
                        <h4>Beneficiary</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi esse voluptatum fugiat recusandae qui aliquam!
                        </p>
                    </div>
                </div>

                <div>
                    <Image src={boyImage} width={139} height={139} />
                    <div className="myCarousel">
                        <h3>Daniel</h3>
                        <h4>Beneficiary</h4>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, quod.
                        </p>
                    </div>
                </div>

                <div>
                    <Image src={girlImage} width={139} height={139} />
                    <div className="myCarousel">
                        <h3>Cindy</h3>
                        <h4>Beneficiary</h4>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, cupiditate.
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>

    );
};

export default Testimonials;
