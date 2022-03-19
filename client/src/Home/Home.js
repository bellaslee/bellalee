import '../assets/css/styles.css';
import React from 'react';
import Header from './Header';
import Footer from '../Components/Footer';

class Home extends React.Component {
  render() {
    return (
     <div>
      <Header />
      <Footer />
    </div>
    );
  }
}

export default Home;