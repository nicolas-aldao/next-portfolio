// index.js
import Hero from "../components/UI/Hero";
import Services from "../components/UI/Services";
import About from "../components/UI/About";
import Portfolio from "../components/UI/organisms/Portfolio";
import Testimonial from "../components/UI/Testimonial";
import Education from "../components/UI/Education";
import Contact from "../components/UI/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nicolás Aldao | Frontend Developer</title>
        {/* <meta charSet="utf-8" />
        <meta name="csrf_token" content="" />
        <meta property="type" content="website" />
        <meta property="url" content="https://nicolas-aldao.vercel.app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="_token" content="" />
        <meta name="robots" content="noodp" />
        <meta property="title" content="my title" />
        <meta property="description" content="my description" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="my title" />
        <meta property="og:description" content="my description" />
        <meta
          property="og:image"
          content="https://64.media.tumblr.com/avatar_f332fc701bb2_128.pnj"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://nicolas-aldao.vercel.app" />
        <meta
          property="og:site_name"
          content="Nicolás Aldao | Frontend Developer"
        /> */}
      </Head>
      <Hero />
      {/* <Services /> */}
      <Education />
      <Portfolio />
      <About />
      {/* <Testimonial /> */}
      <Contact />
    </>
  );
}
