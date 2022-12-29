import React, { useState } from 'react'
import styles from '../styles/navbar.module.css'

const NavBar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const toggleNav = () => {
        setNavOpen(!navOpen);
    }
    return (
        <section>
            {/* header start */}
            <header className={styles.site_header}>
                <div className={`${styles.wrapper} ${styles.site_header__wrapper}`}>

                    <div className={styles.site_header__start}>
                        <a href="#" className={styles.brand}>Brand</a>
                    </div>
                    <div className={styles.site_header__middle}>
                        <nav className={styles.nav}>
                            <button className={styles.nav__toggle} aria-expanded="false" type="button" onClick={toggleNav}>
                                {navOpen ? 'close menu' : 'menu'}
                            </button>
                            {/* {navOpen &&} */}
                            <ul className={`${styles.nav__wrapper} ${navOpen ? styles.active : ''}`}>
                                <li className={styles.nav__item}><a href="#">Home</a></li>
                                <li className={styles.nav__item}><a href="#">About</a></li>
                                <li className={styles.nav__item}><a href="#">Services</a></li>
                                <li className={styles.nav__item}><a href="#">Hire us</a></li>
                                <li className={styles.nav__item}><a href="#">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.site_header__end}>
                        <a href="#">Sign in</a>
                    </div>
                </div>
            </header>

        </section>
    )
}

export default NavBar