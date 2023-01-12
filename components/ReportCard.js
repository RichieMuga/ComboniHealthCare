import React from 'react'
import styles from '../styles/LandingPageCss/whatweDo.module.css'

const ReportCard = () => {
    return (
        <div className={styles.column}>
            <div className={styles.card}>
                {/* <Image>{children}</Image> */}
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ReportCard