// import App from 'next/app'
import '../assets/css/style.css';
import '../assets/css/home.css';
import '../assets/css/about.css';
import '../assets/css/portfolio.css';
import '../assets/css/resume.css';
import '../assets/css/Article.css';
import '../assets/css/Carousel.css';
import '../assets/css/Footer.css';
import '../assets/css/ImageGrid.css';
import '../assets/css/Spacer.css';
import '../assets/css/ScrollIndicator.css';
import '../assets/css/Nav.css';
import '../assets/css/BackButton.css';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp