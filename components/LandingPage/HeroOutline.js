import React, { useEffect, useRef } from 'react'
import styles from '../../styles/LandingPageCss/landing.module.css'
import Link from 'next/link';
import { motion } from 'framer-motion'
import { useInView, useAnimation } from 'framer-motion';

const HeroOutline = () => {

    const animation = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.2 })
    useEffect(() => {
        if (isInView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                },

            })
        }
        if (!isInView) {
            animation.start({
                x: '-100vw'
            })
        }
    }, [isInView])
    return (<>
        <div className={styles.landing_section} ref={ref}>
            {/* <Image src={girlImage} layout="fill" objectFit='cover' className='full-width-bg' /> */}
            <motion.section className={styles.landingBox} animate={animation} >
                <h1 className='heading_main'>Who are we?</h1>
                <p className='normal_head' style={{ color: '#ffffff' }}>
                    We are a <b>community based organization(CBO)</b> that offer health intervention to the people of Korogocho, Kariobangi and Huruma, addressing <b>HIV</b> and <b>dIsability among children.</b>
                </p>
                <Link style={{ display: "block" }} href='/AboutUs'><button className="button-9">Read more</button></Link>
            </motion.section>

        </div>
    </>

    )
}

export default HeroOutline

// import './styles.css'

// function MyComponent() {
//     return (
//         <div className="my-component">
//             {/* component content goes here */}
//         </div>
//     )
// }
