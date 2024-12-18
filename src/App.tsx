import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Team } from "./components/Team";
import landing from "/src/assets/landing.png";
import "./App.css";
import {Contact} from "@/components/Contact.tsx";

function App() {
    return (
        <>
            <img src={landing} alt={"landing"} className={"hidden"}/>
            <Navbar/>
            <Hero/>
            {/*<Sponsors />*/}
            <About/>
            <HowItWorks/>
            {/*<Features />*/}
            {/*<Services />*/}
            {/*<Cta />*/}
            {/*<Testimonials />*/}
            <Pricing/>
            <Contact/>
            <Team/>
            {/*<Newsletter />*/}
            <FAQ/>
            {/*<Footer />*/}
            <ScrollToTop/>
        </>
    );
}

export default App;
