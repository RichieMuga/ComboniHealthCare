import React from 'react'
import styles from '../../styles/LandingPageCss/whatweDo.module.css'
import CardDetails from '../CardDetails'
import womanHug from '../../public/assets/prototypePictures/children/womanHugging.jpg'
import brail from '../../public/assets/prototypePictures/children/brail.jpg'
import childrenReading from '../../public/assets/prototypePictures/children/kidsWriting.jpg'



const WhatweDo = () => {
    return (
        <section>
            <h1 className='normal-header'>What we do</h1>
            <div className={styles.row}>
                <CardDetails imageHere={womanHug} text={'Creating awareness on HIV prevention'} />
                <CardDetails imageHere={brail} text={'Offering affordable and reliable therapy services to children living with disabilities'} />
                <CardDetails imageHere={childrenReading} text={'Capacity building on HIV and disability related issues'} />

            </div>
        </section>
    )
}

export default WhatweDo