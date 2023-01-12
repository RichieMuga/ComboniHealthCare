import React from 'react'
import NavBar from '../components/NavBar';
import logo from '../public/assets/logos/comboniHealthProgramme-removebg-preview.png'
import { HiOutlineDocumentReport } from "react-icons/hi";
import ReportCard from '../components/ReportCard';

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
    const onButtonClick2017 = () => {
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
    const onButtonClick2018 = () => {
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
    const onButtonClick2019 = () => {
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


    return (
        <div className='margintopNv'>
            <NavBar />
            <h1 className='normal-header'>Reports</h1>
            <div>
                2015 Report
                <button onClick={onButtonClick2015}>DOWNLOAD</button>
            </div>



        </div>
    )
}

export default Reports