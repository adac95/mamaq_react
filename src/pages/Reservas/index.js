import React from "react";
import "../styles/Reservas.css";
import "../styles/Reservas_MQ.css";
import ReservasHeroImage from "../assets/mamaq-salon.jpg";
import ReservasForm from "../../components/reservas/ReservasForm";
import ReservasMap from "../../components/reservas/ReservasMap";

const Reservas = () => {
  return (
    <div className='Reservas'>
      <section className='hero-container'>
        <img className='hero__img' src={ReservasHeroImage} alt='' />
        <h3 className='h3 hero__h3'>Reservaciones</h3>
      </section>
      <section className='reserva-container'>
        <ReservasForm/>
        <ReservasMap/>
      </section>
    </div>
  );
};

export default Reservas;
