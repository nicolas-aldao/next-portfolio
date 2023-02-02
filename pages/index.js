import Hero from "../components/UI/Hero";
import Services from "../components/UI/Services";
import About from "../components/UI/About";
import Portfolio from "../components/UI/Portfolio";
import Testimonial from "../components/UI/Testimonial";
import Education from "../components/UI/Education";
import Contact from "../components/UI/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nicolás Aldao</title>
      </Head>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonial />
      <Education />
      <Contact />
    </>
  );
}
