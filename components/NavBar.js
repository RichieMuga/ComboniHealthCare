import React, { useState, useEffect } from 'react'
import styles from '../styles/navbar.module.css'
import Image from 'next/image'
import logo from '../public/assets/logos/comboniHealthProgramme-removebg-preview.png'
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import Link from 'next/link';




const NavBar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [active, setActive] = useState("/"); // sets the initial active page to "home"



    // const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');

    const [showTeam, setShowTeam] = useState(false);

    // const handleNav = () => {
    //     setNav(!nav);
    // };


    const toggleNav = () => {
        setNavOpen(!navOpen);
    }
    if (typeof window !== 'undefined') {
        useEffect(() => {
            // updates the active page when the pathname changes
            setActive(window.location.pathname);
        }, [window.location.pathname]); // triggers the effect only when the pathname changes

    }

    useEffect(() => {
        setTextColor('#000000')
        setColor('#ffffff')
    }, [])
    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 70) {
                setColor('#5e5050');
                setTextColor('#ffffff');
            }
            // if (window.inner <= 400 && window.scrollY >= 70) {
            //     setTextColor('#000000')
            // }
            else {
                setColor('#ffffff');
                setTextColor('#000000');
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);

    return (
        <section>
            {/* header start */}
            <header className={styles.site_header} style={{ backgroundColor: `${color}` }}>
                <div className={`${styles.wrapper} ${styles.site_header__wrapper}`}>

                    <div className={styles.site_header__start}>
                        <Link href="#" className={styles.brand}><Image alt='ComboniHealth' src={logo} height={70} width={70}></Image></Link>
                    </div>
                    <div className={styles.site_header__middle}>
                        <nav className={styles.nav}>
                            <button className={styles.nav__toggle} aria-expanded="false" type="button" onClick={toggleNav}>
                                {navOpen ? <MdOutlineClose size={30} /> : <MdMenu size={30} />}
                            </button>
                            {/* {navOpen &&} */}
                            <ul style={{ transition: '300ms ease-in', background: `${color}` }} className={`${styles.nav__wrapper} ${navOpen ? styles.active : ''}`}>
                                <li className={active === "/" ? `${styles.nav__item} ${styles.active}` : styles.nav__item} onClick={() => setActive("/")} ><Link style={{ color: `${textColor}` }} href="/">Home</Link></li>
                                <li className={active === "/Services" ? `${styles.nav__item} ${styles.active}` : styles.nav__item} onClick={() => setActive("/Services")}><Link style={{ color: `${textColor}` }} href="/Services">Services</Link></li>

                                <li className={active === "/AboutUs" ? `${styles.nav__item} ${styles.active}` : styles.nav__item} onClick={() => setActive("/AboutUs")}><Link style={{ color: `${textColor}` }} href="/AboutUs">About us</Link></li>
                                <li className={active === "/GetInvolved" ? `${styles.nav__item} ${styles.active}` : styles.nav__item}><Link style={{ color: `${textColor}` }} href="/GetInvolved" onClick={() => setActive("GetInvolved")}>Get Involved</Link></li>
                                <li className={active === "/OurTeaM" ? `${styles.nav__item} ${styles.active}` : styles.nav__item}><Link style={{ color: `${textColor}` }} href="/OurTeam" onClick={() => setActive("GetInvolved")}>Our Team</Link></li>
                                <li className={active === "/Reports" ? `${styles.nav__item} ${styles.active}` : styles.nav__item} onClick={() => setActive("/News")}><Link style={{ color: `${textColor}` }} href="/Reports">Reports</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.site_header__end}>
                        <Link href="/Donate" className={styles.button_24}>Donate</Link>
                    </div>
                </div>
            </header>

        </section >
    )
}

export default NavBar

