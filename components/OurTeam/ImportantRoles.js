import React from 'react'
import Gallery from './Gallery'
import styles from '../../styles/OurTeam/core.module.css'

const ImportantRoles = () => {
    return (
        <div>
            <h1 className='normal-header'>The Whole Team</h1>
            <div className='space' />
            <Gallery />
            <div className='space' />
            <table className={styles.customers}>
                <tbody>
                    <tr>
                        <th>Administration</th>
                        <th>Comprehensive Care Clinic</th>
                        <th>Community Based Rehabilitation Project</th>
                    </tr>
                    <tr>
                        <td>1 Director</td>
                        <td>Incharge Clinical Officer</td>
                        <td>Incharge Occupational Therapist</td>
                    </tr>
                    <tr>
                        <td>1 Project Coordinator</td>
                        <td>3 Nurses</td>
                        <td>1 Assistant Physiotherapist</td>
                    </tr>
                    <tr>
                        <td>1 Accountant</td>
                        <td>1 Pharmacist</td>
                        <td>1 Social Worker</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>2 Counselors</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>2 Support Staff</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>20 Community Health Volunteers</td>
                        <td></td>
                    </tr>
                </tbody>

            </table>
            <div className='space' />


        </div>
    )
}

export default ImportantRoles