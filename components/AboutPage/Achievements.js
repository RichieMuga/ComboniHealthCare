import React from 'react'
import Image from 'next/image'
import seventeenCert from '../../public/assets/officialFile/cerificates/2017cert.png'
import nineteenCert from '../../public/assets/officialFile/cerificates/2019Rightcert.png'


const Achievements = () => {
    return (
        <section>
            <h1 className='normal-header space2'>Achievements</h1>
            <div className='containerAchievements'>
                <div className='cert1'>
                    <Image width={450} height={500} src={seventeenCert} className='flex_kidogo' />
                    <p className='paragraph-111'>Best performing site certification 2019</p>
                </div>
                <div className='cert1'>
                    <Image width={400} height={400} src={nineteenCert} />
                    <p className='paragraph-11'>3rd best QI best practice 2017 in Ruaraka Subcounty</p>
                </div>

            </div>
        </section>
    )
}

export default Achievements