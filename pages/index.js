import Hero from "../components/UI/sections/Hero";
import About from "../components/UI/sections/About";
import Portfolio from "../components/UI/organisms/Portfolio";
// import Testimonial from "../components/UI/Testimonial";
import Education from "../components/UI/sections/Education";
import Contact from "../components/UI/sections/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nicolás Aldao | Frontend Developer</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content="Social Title for Cool Page" />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta
          property="og:image"
          content="https://example.com/images/cool-page.jpg"
        />
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
