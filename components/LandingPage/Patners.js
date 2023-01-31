import Image from 'next/image'
import React from 'react'
import patnersList from '../../utils/patners'
import styles from '../../styles/LandingPageCss/landing.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link';



const Patners = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        desktop4: {
            breakpoint: { max: 3000, min: 1250 },
            items: 6
        },
        deskto3: {
            breakpoint: { max: 1250, min: 1024 },
            items: 5
        },
        desktop2: {
            breakpoint: { max: 1024, min: 870 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 870, min: 620 },
            items: 3
        },
        tablet2: {
            breakpoint: { max: 620, min: 380 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 380, min: 0 },
            items: 2
        }
    };
    return (
        <div className='space'>
            <h1 className='normal-header'>Patners</h1>
            {/* <Carousel className={styles.patner_container}> */}
            <Carousel className={styles.carousel} responsive={responsive} slidesToSlide={1} infinite={true} autoPlay={true} autoPlaySpeed={2500}>
                {patnersList.map((patner) => {
                    return (
                        <Link href={patner.link} target="_blank" key={patner.id}>
                            <div key={patner.id} className={styles.individualPatner}>
                                <div className={styles.patner_column}>
                                    <Image height={100} width={100} src={patner.image} alt={patner.title} />
                                    <p className='title-p'>{patner.title}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </Carousel>

        </div>
    )
}

export default Patners