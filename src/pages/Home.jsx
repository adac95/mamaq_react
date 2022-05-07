import React from "react";
import Slider from "../components/home/Slider";
import Options from "../components/home/Options";
import Propuesta from "../components/home/Propuesta";
import ImgBar from "../components/home/ImgBar";
import BannerReserva from "../components/home/BannerReserva";
import ContactForm from "../components/home/ContactFrom";

import "../styles/Home.css";
import "../styles/Home_MQ.css";

const Home = () => {
  return (
    <div className='Home'>
      <section id='inicio' className='slider-section'>
        <Slider />
        <Options />
      </section>
      <Propuesta />
      <ImgBar />
      <BannerReserva />
      <ContactForm />
    </div>
  );
};

export default Home;
