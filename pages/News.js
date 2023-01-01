import React from 'react'
import NavBar from '../components/NavBar';
import styles from '../styles/news.module.css'
import { Carousel } from 'react-multi-carousel';
import Image from 'next/image'
import logo from '../public/assets/logos/comboniHealthProgramme-removebg-preview.png'
import girlImage from '../public/assets/prototypePictures/children/smallGirlSmile.jpg'



const News = () => {
    const images = [
        { src: logo },
        { src: logo },
    ];

    return (
        <div>
            <NavBar />
            News
        </div>
    )
}

export default News