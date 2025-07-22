import { NavbarDemo } from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import Pricing from "../components/landing/Pricing";
import Footer from "../components/landing/Footer";
import { ThreeDMarqueeDemo } from "../components/landing/ThreeDMarquee";

const Landing = () => {
  return (
    <>
      <NavbarDemo />
      <Hero />
      <ThreeDMarqueeDemo/>
      <Features />
      <Pricing />
      <Footer />
    </>
  );
};

export default Landing;
