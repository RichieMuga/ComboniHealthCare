import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
import { IoIosCall } from "react-icons/io";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

const GetInvolved = () => {
    return (
        <div className='margintopNv'>
            <NavBar />
            <h1 className='normal-header'>Get Involved</h1>
            <p className='special-paragraph2'>
                You can get involved through donating towards projects or paying visits to our organisation.

                <br />
                <br />

                For donation kindly click on the donation button for further details, while to get involved with our projects in other ways(For example volunteering or sponsoring). Kindly reach us with the following contacts.
            </p>
            <div className='div-box-Number-Email'>
                <p><IoIosCall size={23} />{' '}+254712345678</p>
                <p><MdEmail size={23} /> {' '}combonihealth@gmail.com</p>
            </div>

            <Footer />


        </div>
    )
}

export default GetInvolved