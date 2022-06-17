import React from "react";
import { Link } from "react-router-dom";
import SliderImgOne from "../../../assets/WEB-MAMAQ_BANNER-1.jpg";
import SliderImgTwo from "../../../assets/header1_mamaq.jpg";
import SliderImgThree from "../../../assets/WEB-MAMAQ_BANNER-2.jpg";

import "./styles.css"
import "./styles_mq.css"

const Slider = () => {
  let i = 0;
  const slideBack = () => {
    const $slide = document.querySelectorAll(".slide");
    $slide[i].classList.remove("slide-active");
    i--;
    if (i < 0) i = $slide.length - 1;
    $slide[i].classList.add("slide-active");
  };

  const slideNext = () => {
    const $slide = document.querySelectorAll(".slide");
    $slide[i].classList.remove("slide-active");
    i++;
    if (i > $slide.length - 1) i = 0;
    $slide[i].classList.add("slide-active");
  };

  return (
    <div className='slides-container'>
      <div className='slide slide-active slide-one'>
        <img className='slide__img' src={SliderImgOne} alt='imagen de banner publicitario' />
        <a
          href='https://wa.me/51989070874'
          rel='noopener noreferrer'
          target='_blank'
          className='a slide__btn slide__btn-one'
        >
          Vía whatsapp
        </a>
      </div>
      <div className='slide slide-two'>
        <img className='slide__img' src={SliderImgTwo} alt='imagen de banner publicitario' />
        <Link to='/reservas' className='a slide__btn slide__btn-two'>
          Reserva aquí!
        </Link>
      </div>
      <div className='slide slide-three'>
        <img className='slide__img' src={SliderImgThree} alt='imagen de banner publicitario' />
      </div>
      <div className='slide-btn-arrow-container'>
        <button
          id='slideArrowLBtn'
          className='slide-arrow-btn fa fa-angle-left'
          onClick={slideBack}
        ></button>
        <button
          id='slideArrowRBtn'
          className='slide-arrow-btn fa fa-angle-right'
          onClick={slideNext}
        ></button>
      </div>
    </div>
  );
};

export default Slider;
