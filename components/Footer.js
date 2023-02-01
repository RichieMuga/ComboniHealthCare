import styles from '../styles/footer.module.css'
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { animateScroll as scroll } from 'react-scroll'
import { HiLocationMarker } from "react-icons/hi";
import Link from 'next/link';



// BsTwitter

const Footer = () => {
    const handleBackTotop = () => {
        scroll.scrollToTop({
            smooth: true, // this value enables the smooth scrolling animation
        })
    }
    return (
        <div className={styles.footer}>
            <button onClick={handleBackTotop} className={styles.btn_top} type="submit">Back to top</button>
            {/* newsletter section */}
            {/* <div className={styles.newsLetter}>
                <h4 className={styles.newsLetterTitle}>NewsLetter</h4>

                <div className={styles.textNsubscribe}>
                    <p>Want to recieve updates about Comboni? Subscribe to us.</p>
                    <section className={styles.btnNinput}>
                        <input type="text" className={styles.nws_form_input} placeholder='Your Email' />
                        <button className={styles.nws_btn} type="submit">Subscribe</button>
                    </section>
                </div>
            </div> */}
            {/* links section */}
            <section className={styles.links_heading}>
                <div className={styles.links_individual}>
                    <h4>Quick Links</h4>
                    <div>
                        <Link href="/GetInvolved"><p>Contact Us</p></Link>
                        <Link href="/AboutUs"><p>About</p></Link>
                        <Link href="https://goo.gl/maps/h13AfFhcTqJN9kRf7"><p>Location</p></Link>

                    </div>
                </div>
                <div className={styles.links_individual}>
                    <h4>Comboni Health Programme</h4>
                    <div>
                        <p><HiLocationMarker /> Nairobi, Kenya</p>
                        <p>© 2023 Comboni. All rights reserved. We respect your privacy. By using our site, you agree to our terms. </p>
                    </div>
                </div>
            </section>
            {/* socials section */}
            {/* <section className="flex_kidogo">
                <BsTwitter size={22} color="#ffffff" />
                <BsFacebook size={22} color="#ffffff" />
                <BsInstagram size={22} color="#ffffff" />
            </section> */}
            {/* final footer section */}
            <section className='flex_kidogo'>
                {/* <Image src={logo}></Image> */}
                <p className='smallP'>Comboni Health Program 2023</p>
            </section>

        </div>
    )
}

export default Footer