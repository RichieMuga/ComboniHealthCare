import React from 'react'
import { HiOutlineDocumentReport } from "react-icons/hi";

const ReportCard = ({ year, btnFunction }) => {
    return (
        <div className='report-div'>
            <HiOutlineDocumentReport color='#ffffff' size={50} />
            <p>Annual Report {year}</p>
            <button className='button-30' onClick={btnFunction}>Download</button>
        </div>
    )
}

export default ReportCard