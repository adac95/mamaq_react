/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

import OptionsImageOne from "../../assets/WEB-MAMAQ_BOX-1.jpg";
import OptionsImageTwo from "../../assets/mamaq-reserva.jpg";
import OptionsImageThree from "../../assets/WEB-MAMAQ_BOX-2.jpg";

const Options = () => {
  return (
    <div className='home-options-container'>
      <figure className='home-options-figure'>
        <img
          className='home-options__img home-options__img-one'
          src={OptionsImageOne}
        />
        <a
          className='a btn home-options__btn home-options__a'
          href='https://wa.me/51989070874'
          rel="noopener noreferrer"
          target='_blank'
        >
          Pide vía whatsapp
        </a>
      </figure>
      <figure className='home-options-figure'>
        <img
          className='home-options__img home-options__img-two'
          src={OptionsImageTwo}
        />
        <Link to="/reservas" className='a home-options__a'>Reserva aquí!</Link>
      </figure>
      <figure className='home-options-figure'>
        <img
          className='home-options__img home-options__img-three'
          src={OptionsImageThree}
        />
        <Link to="/carta" className='a home-options__a option-menu-three'>La carta!</Link>
      </figure>
    </div>
  );
};

export default Options;
