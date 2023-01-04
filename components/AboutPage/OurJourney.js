import React from 'react'
import styles from '../../styles/AboutPageCss/AboutUs.module.css'


const OurJourney = () => {
    return (
        <section>
            <h1 className='normal-header space2'>Our Journey</h1>
            <div className={styles.journey_container}>
                <div>
                    <h1>1999</h1>
                    <p>The programme was established in 1986 by Sr. Jill Horsefield a Medical Mission Sister. The main purpose then
                        was to address health issues caused by the poor sanitation condition of Korogocho which was in such a pathetic state that caused a high spread of infectious diseases such as cholera, dysentery, typhoid and intestinal worm. This was done through networking with the existing health facilities, community health education and promotions and encouraging community members to utilize the available health systems.</p>
                </div>
                <div>
                    <h1>2006</h1>
                    <p>It saw a change in management to the Comboni Missionary Sisters Health Programme, HIV testing was introduced hence the project expanded its scope to include identification and management of HIV/AIDS cases.
                        The goal of CMSHP was to create awareness and sensitize the community on the spread and prevention of HIV. The programme expanded its services to include HTS, psychological Counseling and family support, comprehensive care clinic, Tb treatment, Nutritional therapy clinic, social support and feeding programme.
                        Continuous health trainings for beneficiaries and CHVs also became an integral part of services offered.</p>
                </div>
                <div>
                    <h1>2015</h1>
                    <p>The programme changed management again to its present owners, the Comboni Missionary Fathers of
                        Kariobangi Catholic Parish. With the change in management the programme has enhanced the existing
                        services and introduced 2 other services; hypertension clinic and medical treatment for children with special
                        needs, with plans underway to introduce a diabetic clinic and a community pharmacy. These services are
                        intended to support the programme in collecting funds to support care and treatment for those who are
                        needy and HIV infected. CHP has also strengthened its networking and collaboration with existing partners
                        and other facilities offering health care services within and out of korogocho, which has in turn lead to ease of
                        referral and patient management for cases that cannot be handled at community level.</p>
                </div>
            </div>
            <div>
                <p className='special-paragraph'>At comboni we are dedicated to promote a healthier and happier living for people living with HIV infection by supporting the health care needs of people living with HIV/AIDS and children with special needs living in poverty and are not able to access professional health care services.</p>
            </div>
        </section >
    )
}

export default OurJourney