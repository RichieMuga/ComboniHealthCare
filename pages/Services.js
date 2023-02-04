import React from 'react'
import NavBar from '../components/NavBar';
import Image from 'next/image'
// import boy from '../public/assets/prototypePictures/children/smallboysmile.jpeg'
import Footer from '../components/Footer';
// import boy2 from '../public/assets/prototypePictures/children/smallboysmile.jpeg'
import ccc from '../public/assets/picturesFromOscar/services/ccc.jpeg'
import rehabProject from '../public/assets/picturesFromOscar/services/rehabProject.jpeg'
import socialSupport from '../public/assets/picturesFromOscar/services/socialSupport.jpeg'
import Head from 'next/head'





const Services = () => {
    return (
        <div className='margintopNv'>
            <Head>
                <title>Services | Comboni Health</title>
                <meta name="description" content="Services Comboni Health Programme (CHP)  offers to community members in Nairobi,Kenya" />
                <meta name="description" content="HIV/AIDS treatment in Nairobi,Kenya" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/favicon.ico" />
            </Head>
            <NavBar />
            <h1 className="fancyHeader">Services</h1>
            <p className='special-paragraph2'>We provide quality, affordable and reliable healthcare services to people living with HIV and AIDS and children with disabilities in Korogocho, Kariobangi and Huruma.</p>
            <div className='div-For-responsiveness'>
                <div className='flex_kidogo_mpya '>
                    <Image className='roundedPicture' src={ccc} alt='ccc' />
                    <div>
                        <h1 className='heading-1 '> Comprehensive Care clinic</h1>
                        <ul className='ul-padding'>
                            <li>• HIV Testing Services </li><br />
                            <li>• Care and treatment</li><br />
                            <li>• Treatment Adherence Support (TAS)</li><br />
                            <li>• Patient monitoring</li><br />
                            <li>• Early infant diagnosis</li><br />
                            <li>• Pharmacy</li><br />
                            <li>• TB clinic</li><br />
                            <li>• Prevention of Mother to Child Transmission</li><br />
                            <li>• Natural supplements therapy clinic</li><br />
                            <li>• Sexual and Gender Based Violence support</li><br />

                        </ul>
                    </div>
                </div>
            </div>

            <div className='div-For-responsiveness special-background'>
                <div className='flex_kidogo_mpya '>
                    <Image className='roundedPicture' src={rehabProject} alt='rehabProject' />
                    <div>
                        <h1 className='heading-1 '> Community Based Rehabilitation Project</h1>
                        <ul className='ul-padding'>
                            <li>• Physiotherapy and occupational therapy services </li><br />
                            <li>• Home therapy programs</li><br />
                            <li>• Referrals and networking</li><br />
                            <li>• Dispensing of anticonvulsant drugs</li><br />
                        </ul>
                    </div>
                </div>
            </div>

            <div className='div-For-responsiveness'>
                <div className='flex_kidogo_mpya '>
                    <Image className='roundedPicture' src={socialSupport} alt='socialSupport' />
                    <div>
                        <h1 className='heading-1 '> Social Support</h1>
                        <ul className='ul-padding'>
                            <li>• Psychological counseling services </li><br />
                            <li>• Support groups</li><br />
                            <li>• Home Based Care programs</li><br />
                            <li>• Dispensing of anticonvulsant drugs</li><br />
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Services