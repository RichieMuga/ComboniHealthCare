import React from 'react'
import styles from '../../styles/LandingPageCss/landing.module.css'
import girlImage from '../../public/assets/prototypePictures/children/smallGirlSmile.jpg'
import boyImage from '../../public/assets/prototypePictures/children/smallboysmile.jpg'


const HeroOutline = () => {
    const images = [
        {
            src: girlImage
        },
        {
            src: boyImage
        },

    ];
    return (<>
        <div className={styles.landing_section}>
            {/* <Image src={girlImage} layout="fill" objectFit='cover' className='full-width-bg' /> */}
            <section className={styles.landingBox}>
                <h1 className='heading_main'>Who are we?</h1>
                <p className='normal_head'>
                    We are a <b>community based organization(CBO)</b> that offer health intervention to the people of Korogocho, Kariobangi and Huruma. Addressing <b>HIV</b> and <b>dIsability among children.</b>
                </p>
            </section>
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
