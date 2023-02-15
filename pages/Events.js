import React from 'react'
import Link from 'next/link';
import Head from 'next/head'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Events = () => {
    return (
        <div className='margintopNv'>
            <Head>
                <title>Events | Comboni Health</title>
                <meta name="description" content="Events currenlty happeing at Comboni Health Programme (CHP)." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/favicon.ico" />
            </Head>
            <NavBar />

            <h1 className='normal-header'>Events</h1>
            <p className='special-paragraph2'>
                There are no events currently ongoing. If you would like to sponsor an event. Kindly contact us through <Link href='/GetInvolved'><p className='link'>Our contact</p> </Link>
            </p>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />


            <Footer />


        </div>
    )
}

export default Events