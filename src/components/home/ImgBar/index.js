import React from "react";
import ImgBarImgOne from "../../../assets/WEB-MAMAQ-ecofriendly.png"
import ImgBarImgTwo from "../../../assets/WEB-MAMAQ-artesanal.png"
import ImgBarImgThree from "../../../assets/WEB-MAMAQ-homemade.png"
import ImgBarImgFour from "../../../assets/WEB-MAMAQ-petfriendly.png"

import "./styles.css"
import "./styles_mq.css"

const ImgBar = () => {
  return (
    <section className='img-bar'>
      <img
        className='img-bar__img'
        src={ImgBarImgOne}
        alt=''
      />
      <img
        className='img-bar__img'
        src={ImgBarImgTwo}
        alt=''
      />
      <img
        className='img-bar__img'
        src={ImgBarImgThree}
        alt=''
      />
      <img
        className='img-bar__img'
        src={ImgBarImgFour}
        alt=''
      />
    </section>
  );
};

export default ImgBar;
