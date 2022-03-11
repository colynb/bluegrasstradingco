import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&family=Roboto:ital,wght@0,400;0,500;1,400&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
