import React from "react";
import Slider from "../../components/home/Slider";
import Options from "../../components/home/Options";
import Propuesta from "../../components/home/Propuesta";
import ImgBar from "../../components/home/ImgBar";
import BannerReserva from "../../components/home/BannerReserva";
import ContactForm from "../../components/home/ContactForm";

const Home = () => {
  return (
    <>
      <section id='inicio'>
        <Slider />
        <Options />
      </section>
      <Propuesta />
      <ImgBar />
      <BannerReserva />
      <ContactForm />
    </>
  );
};

export default Home;
