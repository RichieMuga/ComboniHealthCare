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
                    <Image width={450} height={500} src={seventeenCert} />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, nisi.
                </div>
                <div>
                    <Image width={400} height={400} src={nineteenCert} />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </div>

            </div>
        </section>
    )
}

export default Achievements