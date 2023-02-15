import React from 'react'
import NavBar from '../components/NavBar';
import logo from '../public/assets/logos/comboniHealthProgramme-removebg-preview.png'
import { HiOutlineDocumentReport } from "react-icons/hi";
import ReportCard from '../components/ReportCard';
import Footer from '../components/Footer';
import Head from 'next/head'


const Reports = () => {
    const images = [
        { src: logo },
        { src: logo },
    ];
    const onButtonClick2015 = () => {
        // using Java Script method to get PDF file
        fetch('/reports/Comboni Health Programme Annual Report 2015.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = '/reports/Comboni Health Programme Annual Report 2015.pdf';
                alink.click();
            })
        })
    }
    const onButtonClick2016 = () => {
        // using Java Script method to get PDF file
        fetch('/reports/Comboni Health Programme Annual Report 2016.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = '/reports/Comboni Health Programme Annual Report 2015.pdf';
                alink.click();
            })
        })
    }
    const onButtonClick2017 = () => {
        // using Java Script method to get PDF file
        fetch('/reports/Comboni Health Programme Annual Report 2017.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = '/reports/Comboni Health Programme Annual Report 2015.pdf';
                alink.click();
            })
        })
    }
    const onButtonClick2018 = () => {
        // using Java Script method to get PDF file
        fetch('/reports/Comboni Health Programme Annual Report 2018.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = '/reports/Comboni Health Programme Annual Report 2015.pdf';
                alink.click();
            })
        })
    }
    const onButtonClick2019 = () => {
        // using Java Script method to get PDF file
        fetch('/reports/Comboni Health Programme Annual Report 2019.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = '/reports/Comboni Health Programme Annual Report 2015.pdf';
                alink.click();
            })
        })
    }


    return (
        <div className='margintopNv'>
            <Head>
                <title>Reports | Comboni Health</title>
                <meta name="description" content="Reports/news form 2015,2016,2017,2018 and 2019 of Comboni Health Programme (CHP) in Nairobi,Kenya" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/favicon.ico" />
            </Head>
            <NavBar />
            <h1 className='normal-header'>Reports</h1>
            <div className='reports-container'>

                <ReportCard year={2015} btnFunction={onButtonClick2015} />
                <ReportCard year={2016} btnFunction={onButtonClick2016} />
                <ReportCard year={2017} btnFunction={onButtonClick2017} />
                <ReportCard year={2018} btnFunction={onButtonClick2018} />
                <ReportCard year={2019} btnFunction={onButtonClick2019} />
            </div>
            <div className='space '></div>

            <Footer />

        </div>
    )
}

export default Reports