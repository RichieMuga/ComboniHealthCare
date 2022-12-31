import React from 'react'
import styles from '../../styles/whatweDo.module.css'
import CardDetails from '../CardDetails'
import womanHug from '../../public/assets/prototypePictures/children/womanHugging.jpg'

const WhatweDo = () => {
    return (
        <section>
            <h1 className='normal-header'>What we do</h1>
            <div className={styles.row}>
                <CardDetails text={'Creating awareness on HIV prevention'} />
                <CardDetails text={'Offering affordable and reliable therapy services to children living with disabilities'} />
                <CardDetails text={'Capacity building on HIV and disability related issues'} />

            </div>
        </section>
    )
}

export default WhatweDo