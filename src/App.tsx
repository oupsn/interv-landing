import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Team } from "./components/Team";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/*<Sponsors />*/}
      <About />
      <HowItWorks />
      {/*<Features />*/}
      {/*<Services />*/}
      {/*<Cta />*/}
      {/*<Testimonials />*/}
      <Pricing />
      <Team />
      {/*<Newsletter />*/}
      <FAQ />
      {/*<Footer />*/}
      <ScrollToTop />
    </>
  );
}

export default App;
