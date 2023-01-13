import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
import { IoIosCall } from "react-icons/io";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import Head from 'next/head'


const GetInvolved = () => {
    return (
        <div className='margintopNv'>
            <Head>
                <title>Get Involved | Comboni Health</title>
                <meta name="description" content="Get involved/volunteer with Comboni Health Programme (CHP) in Nairobi,Kenya" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/favicon.ico" />
            </Head>
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