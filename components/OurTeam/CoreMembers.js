import React from 'react'
import Leader1 from '../../public/assets/prototypePictures/Leaders/Leader1.png';
import Leader2 from '../../public/assets/prototypePictures/Leaders/Leader2.jpeg';
import Leader4 from '../../public/assets/prototypePictures/Leaders/Leader4.jpeg';
import Leader33 from '../../public/assets/prototypePictures/Leaders/Leader33.jpg';
import Image from 'next/image';
import styles from '../../styles/OurTeam/core.module.css'

const CoreMembers = () => {
    return (
        <section className={styles.center}>
            <div className={styles.team_grid}>
                <div className={styles.flexCenter}>
                    <Image src={Leader1} className={styles.images} />
                    <h4 className={styles.titleLeader}>Director</h4>
                    <h5>Fr. Charles Ndagijimana</h5>
                    <p className={styles.email}>Email: director@combonihealth.or.ke</p>
                </div>

                {/* <div className={styles.flexCenter}>
                    <Image src={Leader33} className={styles.images} />
                    <h4 className={styles.titleLeader}>Project Coordinator</h4>
                    <h5>Everline Achieng</h5>
                    <p className={styles.email}>Email: pco@combonihealth.or.ke</p>
                </div> */}
                <div className={styles.flexCenter}>
                    <Image src={Leader33} className={styles.images} />
                    <h4 className={styles.titleLeader}>Project Coordinator</h4>
                    <h5>Everline Achieng</h5>
                    {/* <p className={styles.email}>Email:</p> */}
                    <p className={styles.email}>Email: pco@combonihealth.or.ke</p>
                </div>

                <div className={styles.flexCenter}>
                    <Image src={Leader2} className={styles.images} />
                    <h4 className={styles.titleLeader}>Incharge
                        Comprehensive Care <br /> Clinic Department (CCC)</h4>
                    <h5>Oketch Odeny</h5>
                    {/* <p className={styles.email}>Email:</p> */}
                    <p className={styles.email}>Email: CCC@combonihealth.or.ke</p>
                </div>

                <div className={styles.flexCenter}>
                    <Image src={Leader4} className={styles.images} />
                    <h4 className={styles.titleLeader}>Incharge
                        Community Based  <br />Rehabilitation Project (CBRP)</h4>
                    <h5>Irene Muange Nduku</h5>
                    <p className={styles.email}>Email: CWD@combonihealth.or.ke</p>
                </div>
            </div>
        </section>

    )
}

export default CoreMembers