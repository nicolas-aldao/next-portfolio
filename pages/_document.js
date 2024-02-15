import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="Checkout our cool page"
            key="desc"
          />
          <meta
            property="og:title"
            content="Nicolás Aldao | Frontend Developer"
          />
          <meta
            property="og:description"
            content="Hey! I'm Nicolás from Argentina. Check out my web page to know more about me."
          />
          <meta
            property="og:image"
            content="https://nicolas-aldao.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.8399bdb8.png&w=640&q=75"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
