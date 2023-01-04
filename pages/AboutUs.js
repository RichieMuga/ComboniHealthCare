import React from 'react'
import NavBar from '../components/NavBar'
import AboutUsSection from '../components/AboutPage/AboutUsSection'
import VisionNMission from '../components/AboutPage/VisionNMission'
import OurJourney from '../components/AboutPage/OurJourney'
import Achievements from '../components/AboutPage/Achievements'
import Footer from '../components/Footer'


const AboutUs = () => {
    return (
        <div>
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