import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <script defer src="../node_modules/@fortawesome/fontawesome-free/js/brands.js"></script>
          <script defer src="../node_modules/@fortawesome/fontawesome-free/js/solid.js"></script>
          <script defer src="../node_modules/@fortawesome/fontawesome-free/js/fontawesome.js"></script>
       </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
