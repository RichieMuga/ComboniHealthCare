import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
import Link from 'next/link';
import Head from 'next/head'



const Donate = () => {
    return (
        <div className='margintopNv'>
            <Head>
                <title>Services | Comboni Health</title>
                <meta name="description" content="Donate to Comboni Health Programme (CHP)  offers to community members in Nairobi,Kenya" />
                <meta name="description" content="Donate to a community based program in Nairobi,Kenya" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/favicon.ico" />
            </Head>
            <NavBar />
            <h1 className='normal-header'>Help Us Make a difference</h1>
            <p className='special-paragraph3'>
                You can support our project activities to improve lives by making a donation. There are a number of ways that you can support our work.
            </p>
            <div className='div-box-Number-Email2'>
                <b className='underline'>1.If you would prefer to make a regular contribution in the local area, you are most welcome to visit us (click on location at the bottom of the website)</b>
                <br />
                <br />
                <br />
                <br />
                <b className='underline'>2. For local transfers kindly use the following details:</b>
                <br />
                <br />
                <table>
                    <tbody>
                        <tr>
                            <td>PAYBILL NUMBER</td>
                            <td>&nbsp;&nbsp;&nbsp;4109251</td>
                        </tr>
                        <br />
                        <tr>
                            <td>ACCOUNT NUMBER:</td>
                            <td>&nbsp;&nbsp;&nbsp;1203391258</td>
                        </tr>
                        <br />
                        <tr>
                            <td>ACCOUNT NAME</td>
                            <td>&nbsp;&nbsp;&nbsp;COMBONI HEALTH PROGRAM-GOROGOCHO</td>
                        </tr>
                        <br />          
                    </tbody>
                </table>

                <br />
                <br />
                

                <b className='underline'>3.[To make a donation via bank transfer/ international transfer, please use the following details.]</b>
                <br />
                <br />
                Our Bank Details:
                <br />
                <br />
                <table>
                    <tbody>
                        <tr>
                            <td>ACCOUNT NAME:</td>
                            <td>&nbsp;&nbsp;&nbsp;COMBONI HEALTH PROGRAMME</td>
                        </tr>
                        <br />
                        <tr>
                            <td>ACCOUNT NUMBER:</td>
                            <td>&nbsp;&nbsp;&nbsp;1203391258</td>
                        </tr>
                        <br />
                        <tr>
                            <td>BANK:</td>
                            <td>&nbsp;&nbsp;&nbsp;NCBA BANK KENYA</td>
                        </tr>
                        <br />
                        <tr>
                            <td>BRANCH:</td>
                            <td>&nbsp;&nbsp;&nbsp;THIKA ROAD MALL</td>
                        </tr>
                        <br />
                        <tr>
                            <td>BRANCH CODE:</td>
                            <td>&nbsp;&nbsp;&nbsp;123</td>
                        </tr>
                        <br />
                        <tr>
                            <td>SWIFT CODE:</td>
                            <td>&nbsp;&nbsp;&nbsp;CBAFKENX</td>
                        </tr>
                        <br />
                        <tr>
                            <td>CURRENCY:</td>
                            <td>&nbsp;&nbsp;&nbsp;KES</td>
                        </tr>
                        <br />
                        <tr>
                            <td>BANK CODE:</td>
                            <td>&nbsp;&nbsp;&nbsp;07000</td>
                        </tr>
                    </tbody>
                </table>



                <br />
                <br />


                4.Fundraise for us – run a marathon, organise a cake sale or host a party for Comboni Health Programme.
            </div>
            <p className='special-paragraph'>
                Please  <Link href='/GetInvolved'><span className='link'>Contact Us </span></Link>if you would like to discuss a fundraising event with us and we will promote it on social media. Any other way you would like to help us, just contact us.
            </p>

            <Footer />
        </div>
    )
}

export default Donate