import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import teamList from '../../utils/teamPictures';
import Image from 'next/image';



const Gallery = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
    };
    return (
        <section className='small-height' >
            <Slider {...settings}>
                {teamList.map((team) => {
                    return (
                        <div className='center' key={team.id}>
                            <Image className='image' src={team.image} alt={team.alt} />
                        </div>
                    )
                })}
            </Slider>
        </section>
    )

}

export default Gallery

// $('.slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true
// });