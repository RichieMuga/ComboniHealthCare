import React from 'react'
import NavBar from '../components/NavBar'
import AboutUsSection from '../components/AboutPage/AboutUsSection'
import VisionNMission from '../components/AboutPage/VisionNMission'
import OurJourney from '../components/AboutPage/OurJourney'
import Achievements from '../components/AboutPage/Achievements'
import Footer from '../components/Footer'
import Head from 'next/head'



const AboutUs = () => {
    return (
        <div>
            <Head>
                <title>About Us | Comboni Health</title>
                <meta name="description" content="About/What is Comboni Health Programme (CHP), is there a community based program around me in Nairobi,Kenya" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/favicon.ico" />
            </Head>
            <NavBar />
            <AboutUsSection />
            <VisionNMission />
            <OurJourney />
            <Achievements />
            <Footer />
        </div>
    )
}

export default AboutUs