import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <base href="/" />
        <meta charset="utf-8" />
        <link rel="icon" href="./img/assets/bee.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-38234744-1"></script>
                <script>
                  window.dataLayer = window.dataLayer || [];
                  function gtag() {dataLayer.push(arguments); }
                  gtag('js', new Date());

                  gtag('config', 'UA-38234744-1');
                </script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}