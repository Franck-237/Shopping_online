import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Prods from './components/Products/Prods';
import Banner from './components/Banner/Banner';
import Suscribe from './components/Suscribe/Suscribe';
import Testimonials  from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from './components/TopProducts/TopProducts';

const App = () => {

  const [orderPopup, setOrderPopup] = useState(false);

  const handlerOrderPopup = () => { 
    setOrderPopup(!orderPopup);
  };

  useEffect(() => { 
      AOS.init({
        offset: 100,
        duration: 600,
        easing: "ease-in-sine",
        delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handlerOrderPopup={handlerOrderPopup}/>
      <Hero handlerOrderPopup={handlerOrderPopup}/>
      <Prods />
      <TopProducts handlerOrderPopup={handlerOrderPopup}/>
      <Banner />
      <Suscribe />
      <Prods />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </div>
  )
};

export default App;