import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
import Link from 'next/link';
import { BsPaypal } from "react-icons/bs";


const Donate = () => {
    return (
        <div className='margintopNv'>
            <NavBar />
            <h1 className='normal-header'>Help Us Make a difference</h1>
            <p className='special-paragraph3'>
                You can support our project activities to improve lives by making a donation. There are a number of ways that you can support our work.
            </p>
            <div className='div-box-Number-Email2'>
                1.If you would prefer to make a regular contribution in loco, you are most welcome to visit us (see our location main office on this website)
                <br />
                <br />
                <br />
                <br />

                2. Make a donation via:
                [paypal-donation]
                <br />
                <br />
                <BsPaypal />

                <br />
                <br />
                <br />


                3.Fundraise for us – run a marathon, organise a cake sale or host a party for Comboni Health Programme.
            </div>
            <p className='special-paragraph'>
                Please  <Link href='/GetInvolved'><span className='link'>Contact Us </span></Link>if you would like to discuss a fundraising event with us and we will promote it on social media. Any other way you would like to help us, just contact us.
            </p>

            <Footer />
        </div>
    )
}

export default Donate