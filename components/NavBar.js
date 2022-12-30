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
    const toggleNav = () => {
        setNavOpen(!navOpen);
    }
    if (typeof window !== 'undefined') {
        useEffect(() => {
            // updates the active page when the pathname changes
            setActive(window.location.pathname);
        }, [window.location.pathname]); // triggers the effect only when the pathname changes

    }

    return (
        <section>
            {/* header start */}
            <header className={styles.site_header}>
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
                            <ul className={`${styles.nav__wrapper} ${navOpen ? styles.active : ''}`}>
                                <li className={active === "/" ? `${styles.nav__item} ${styles.active}` : styles.nav__item} onClick={() => setActive("/")} ><Link href="/">Home</Link></li>
                                <li className={active === "/AboutUs" ? `${styles.nav__item} ${styles.active}` : styles.nav__item} onClick={() => setActive("/AboutUs")}><Link href="/AboutUs">About us</Link></li>
                                <li className={active === "/GetInvolved" ? `${styles.nav__item} ${styles.active}` : styles.nav__item}><Link href="/GetInvolved" onClick={() => setActive("GetInvolved")}>Get Involved</Link></li>
                                <li className={active === "/News" ? `${styles.nav__item} ${styles.active}` : styles.nav__item} onClick={() => setActive("/News")}><Link href="/News">News</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.site_header__end}>
                        <button className={styles.button_24}>Donate</button>
                    </div>
                </div>
            </header>

        </section>
    )
}

export default NavBar

