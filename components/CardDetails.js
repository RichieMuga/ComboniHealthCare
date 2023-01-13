import React from 'react'
// import Image from 'next/image'
import styles from '../styles/LandingPageCss/whatweDo.module.css'
import Image from 'next/image'




const CardDetails = ({ text, imageHere }) => {
    return (
        <div className={styles.column}>
            <div className={styles.card}>
                <Image src={imageHere} className={styles.cardImage}></Image>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default CardDetails