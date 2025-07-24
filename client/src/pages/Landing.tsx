import { NavbarDemo } from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import Pricing from "../components/landing/Pricing";
import Footer from "../components/landing/Footer";
import { ThreeDMarqueeDemo } from "../components/landing/ThreeDMarquee";
import CallToAction from "../components/landing/CallToAction";

const Landing = () => {
  return (
    <>
      <div className="bg-white max-w-7xl p-[1rem] mx-auto">
        <NavbarDemo />
        <Hero />
        <ThreeDMarqueeDemo/>
        <Features />
        <Pricing />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
