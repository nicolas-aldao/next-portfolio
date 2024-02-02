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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Onest:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <style jsx global>{`
          html,
          body {
            font-family: Onest !important;
          }
        `}</style>
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
