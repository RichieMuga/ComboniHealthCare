import Head from 'next/head'
import HeroOutline from '../components/LandingPage/HeroOutline'
import Testimonials from '../components/LandingPage/Testimonials'
import WhatweDo from '../components/LandingPage/WhatweDo'
import NavBar from '../components/NavBar'
import Faqs from '../components/LandingPage/Faqs';
import Patners from '../components/LandingPage/Patners';
import Footer from '../components/Footer'



export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Comboni Health</title>
        <meta name="description" content="Comboni Health Programme (CHP) is a Community Based Health Organization (CBO) in Nairobi,Kenya" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <NavBar />
      <HeroOutline />
      <WhatweDo />
      <Testimonials />
      <Faqs />
      <Patners />
      <Footer />
    </>
  )
}
