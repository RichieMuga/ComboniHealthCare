import React from 'react'
// import Image from 'next/image'
import styles from '../styles/LandingPageCss/whatweDo.module.css'



const CardDetails = ({ text, children }) => {
    return (
        <div className={styles.column}>
            <div className={styles.card}>
                {/* <Image>{children}</Image> */}
                <p>{text}</p>
            </div>
        </div>
    )
}

export default CardDetails