import React from "react";
import { Link } from "react-router-dom";

import BannerReservaImg from "../../../assets/home-reservas.jpg";

import "./styles.css"

const BannerReserva = () => {
  return (
    <section className='reserva-banner'>
      <img className='reserva-banner__img' src={BannerReservaImg} alt='' />
      <div className='reserva-banner__info'>
        <h3 className='reserva-banner__h3'>¡HAZ TU RESERVA!</h3>
        <p className='reserva-banner__p'>
          Recuerda que nuestro aforo es limitado
        </p>
        <Link to='/reservas' className='a btn reserva-banner__a'>
          ¡Reserva aquí!
        </Link>
      </div>
    </section>
  );
};

export default BannerReserva;
