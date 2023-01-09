import React from 'react'
import Image from 'next/image'
// import lovefromchildren from '../../public/assets/prototypePictures/children/lovefromchildren.jpg'
import love from '../../public/assets/prototypePictures/children/lovefromchildren.jpg'
import styles from '../../styles/AboutPageCss/AboutUs.module.css'

// height = { 230} width = { 390}

const AboutUsSection = () => {
    return (
        <div className='margintopNv'>
            <h1 className="fancyHeader">About us</h1>
            <div className='space_up' />
            <h1 className='normal-header'>Changing children{"'"}s lives</h1>
            <div className={styles.about_container}>
                <div className={styles.readableParagraph}>
                    <p>Comboni Health Programme (CHP) is a Community Based Health Organization managed by Comboni Missionaries at Kariobangi Parish under the directorship of Fr Jean Paul Bitia. CHP is a home based care programme that offers health intervention to the people of Korogocho, Kariobangi and Huruma in addressing HIV and disability among children. This is done through the two projects within the community, a CCC and a CBRP. The CCC serves the people of Korogocho while the CBRP services are extend to cover Kariobangi and Huruma.
                    </p>
                    <p>
                        The programme is dedicated to promote a healthier and happier living for people living with HIV infection by
                        supporting the health care needs of people living with HIV/AIDS and children with special needs living in poverty and are not able to access professional health care services
                    </p>
                </div>
                <Image
                    className={styles.image2}
                    src={love}
                    alt='love'></Image></div>
        </div>
    )
}

export default AboutUsSection