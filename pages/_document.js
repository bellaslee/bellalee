import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <base href="/" />
        <meta charset="utf-8" />
        <link rel="icon" href="./img/assets/bee.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="./manifest.json" />
        <title>bella lee</title>
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