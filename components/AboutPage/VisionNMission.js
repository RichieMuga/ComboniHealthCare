import React from 'react'
import styles from '../../styles/AboutPageCss/VisionNMission.module.css'
import Image from 'next/image'
import boy from '../../public/assets/prototypePictures/children/smallboysmile.jpg'
import girl from '../../public/assets/prototypePictures/children/girlinRed.jpg'
// girlinRed.jpg
// smallboysmile.jpg

const VisionNMission = () => {
    return (
        <section className={styles.mainContainer}>
            <div className={styles.VnMcontainer}>
                {/* image */}
                <div>
                    <Image src={girl} className={styles.images}></Image>
                </div>
                <span className={styles.VnMinnerContainer}>
                    <h1 className={styles.vision}>Our Vision</h1>
                    <p>To offer quality and practical health care support to the targeted communities to enhance healthcare that will enable people live longer, healthier and happier life of dignity despite the life challenges caused by poverty.</p>
                </span>
                <span className={styles.VnMinnerContainer}>
                    <h1 className={styles.mission}>Our Mission</h1>


                    <p>1. Creating awareness on prevention of HIV infections.</p>


                    <p>2. Enhancing and restoring good health among people living with HIV.</p>


                    <p>3. Offering affordable and reliable therapy services to children living with disabilities.</p>


                    <p>4. Capacity building on HIV and disability related issues targeting care and management at community level.</p>


                </span>
                {/* image */}
                <div>
                    <Image src={boy} className={styles.images}></Image>
                </div>

            </div>
        </section>

    )
}

export default VisionNMission