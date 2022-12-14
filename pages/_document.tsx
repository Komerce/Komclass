/* eslint-disable @next/next/next-script-for-ga */
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="facebook-domain-verification"
            content="x43wtcwxz378u6zodv71fd2v1bqtn1"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KP99PJQ');`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KP99PJQ"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }}
          />
        </body>
      </Html>
    );
  }
}
