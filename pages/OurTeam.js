import React from 'react'
import NavBar from '../components/NavBar';
import Image from 'next/image'
// import team from '../public/assets/team.jpg'
import boyImage9 from '../public/assets/prototypePictures/children/smallboysmile.jpg'
import Footer from '../components/Footer';
import CoreMembers from '../components/OurTeam/CoreMembers';
import ImportantRoles from '../components/OurTeam/ImportantRoles';



const OurTeam = () => {
    return (
        <div className='margintopNv'>
            <NavBar />
            <h1 className="fancyHeader">Our Team</h1>
            <div className='flex_kidogo'>
                <Image src={boyImage9} className='team-image' />
            </div>
            <h1 className='normal-header'>Leadership</h1>
            <p className='special-paragraph2'>
                “For a community to be whole and healthy, it must be based on people’s <b>love</b> and <b>concern </b>for each other.”
                <br />
                <br />
                ~Millard Fuller</p>
            <CoreMembers />
            <ImportantRoles />

            <Footer />
        </div>
    )
}

export default OurTeam