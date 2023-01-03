import Image from 'next/image'
import React from 'react'
import patnersList from '../../utils/patners'
import styles from '../../styles/LandingPageCss/landing.module.css'



const Patners = () => {
    return (
        <div className='space'>
            <h1 className='normal-header'>Patners</h1>
            <section className={styles.patner_container}>
                {patnersList.map((patner) => {
                    return (
                        <div key={patner.id}>
                            <div className={styles.patner_column}>
                                <Image height={100} width={100} src={patner.image} alt={patner.title} />
                                <p>{patner.title}</p>
                            </div>
                        </div>
                    )
                })}
            </section>

        </div>
    )
}

export default Patners