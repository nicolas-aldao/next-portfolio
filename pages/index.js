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
        {/* <meta charset="utf-8" />
        <meta name="csrf_token" content="" />
        <meta property="type" content="website" />
        <meta property="url" content={"currentUrl"} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="_token" content="" />
        <meta name="robots" content="noodp" />
        <meta property="title" content={"title"} />
        <meta property="quote" content={"quote"} />
        <meta name="description" content={"description"} />
        <meta
          property="image"
          content={"https://64.media.tumblr.com/avatar_f332fc701bb2_128.pnj"}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={"title"} />
        <meta property="og:quote" content={"quote"} />
        <meta property="og:hashtag" content={"hashtag"} />
        <meta
          property="og:image"
          content={"https://64.media.tumblr.com/avatar_f332fc701bb2_128.pnj"}
        />
        <meta content="image/*" property="og:image:type" />
        <meta property="og:url" content={"currentUrl"} />
        <meta property="og:site_name" content="CampersTribe" />
        <meta property="og:description" content={"description"} /> */}
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
