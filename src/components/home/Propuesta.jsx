import React from "react";
import propuestaImgOne from "../../assets/pirqa_sandwich-1.jpg"
import propuestaImgTwo from "../../assets/veggie_clasica.jpg"
import propuestaImgThree from "../../assets/salteados.jpg"
import propuestaImgFour from "../../assets/solterito_dequinua.jpg"

const Propuesta = () => {
  return (
    <section id='nuestra-propuesta' className='Propuesta propuesta-section'>
      <div className='propuesta-container '>
        <div className='propuesta-tittle'>
          <h3 className='h3 propuesta-tittle__h3 propuesta-tittle__h3--green'>
            Corazón Verde
          </h3>
          <br />
          <h3 className='h3 propuesta-tittle__h3'>nuestra propuesta</h3>
        </div>
        <div className='propuesta__img-video-container'>
          <div className='propuesta__img-container'>
            <img
              className='propuesta__img'
              src={propuestaImgOne}
              alt='sandwich pirqa'
            />
            <img
              className='propuesta__img'
              src={propuestaImgTwo}
              alt='hamburguesa veggie clasica'
            />
            <img
              className='propuesta__img'
              src={propuestaImgThree}
              alt='tequeños salteados'
            />
            <img
              className='propuesta__img'
              src={propuestaImgFour}
              alt="ensalada 'solterito de quinua"
            />
          </div>
          <div className='propuesta__video-container'>
            <iframe
              className='propuesta__video'
              src='https://www.youtube.com/embed/VkG4Nj-sbm4?controls=1'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Propuesta;
