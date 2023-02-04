import React, { useEffect, useRef } from 'react'
import styles from '../../styles/LandingPageCss/whatweDo.module.css'
import CardDetails from '../CardDetails'
import capacityBuilding from '../../public/assets/picturesFromOscar/whatwedo/capacityBuilding.jpeg'
import hivAwareness from '../../public/assets/picturesFromOscar/whatwedo/hivAwareness.jpeg'
import therapy from '../../public/assets/picturesFromOscar/whatwedo/therapyDisability.jpeg'
import { motion, useAnimation, useInView } from 'framer-motion'


const WhatweDo = () => {
    const animation = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.2 })

    useEffect(() => {
        if (isInView) {
            animation.start({
                x: 0,
                opacity: 1,
                transition: { delay: 0.2 }
            })
        }
        if (!isInView) {
            animation.start({
                opacity: 1,
                x: '-100vw',
            })
        }
    }, [isInView])
    return (
        <section ref={ref}>
            <h1 className='normal-header'>What we do</h1>
            <motion.div className={styles.row} animate={animation}>
                <CardDetails imageHere={hivAwareness} text={'Creating awareness on HIV prevention'} />
                <CardDetails imageHere={therapy} text={'Offering affordable and reliable therapy services to children living with disabilities'} />
                <CardDetails imageHere={capacityBuilding} text={'Capacity building on HIV and disability related issues'} />

            </motion.div>
        </section>
    )
}

export default WhatweDo