import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Portfolio from "../components/organisms/Portfolio";
// import Testimonial from "../components/UI/Testimonial";
import Education from "../components/sections/Education";
import Contact from "../components/sections/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nicolás Aldao | Frontend Developer</title>
      </Head>
      <Hero />
      <Education />
      <Portfolio />
      <About />
      {/* <Testimonial /> */}
      <Contact />
    </>
  );
}
