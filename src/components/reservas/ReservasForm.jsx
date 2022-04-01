import React from "react";

const ReservasForm = () => {
  return (
    <form className='reserva__form'>
      <p className='p reserva__p--gris'>¡Reserva tu mesa!</p>
      <p className='p reserva__p'>
        Separa el día de tu visita, no olvides que nuestro aforo es limitado 😉
      </p>
      <div className='reserva__form-div'>
        <label className='reserva__label' for='fecha'>
          📅 Fecha
        </label>
        <input
          className='reserva__input'
          type='date'
          name='fecha'
          id='fecha'
          required
        />
        <label className='reserva__label' for='clientes'>
          🙍 Nro de clientes
        </label>
        <input
          className='reserva__input'
          type='number'
          name=''
          id='clientes'
          required
        />
        <label className='reserva__label' for='hora'>
          🕐 Hora
        </label>
        <input className='reserva__input' type='time' id='hora' required />
        <label className='reserva__label' for='nombre'>
          Nombre*
        </label>
        <input className='reserva__input' type='text' id='nombre' required />
        <label className='reserva__label' for='email'>
          Email*
        </label>
        <input
          className='reserva__input'
          type='email'
          name='email'
          id='email'
        />
        <label className='reserva__label' for='telf'>
          Teléfono*
        </label>
        <input
          className='reserva__input'
          type='text'
          name='telf'
          id='tefl'
          required
        />
        <label className='reserva__label' for='mensaje'>
          Mensaje*
        </label>
        <input className='reserva__input' type='text' name='' id='' />
        <input
          className='reserva__input reserva__input--submit'
          type='submit'
          value='Reservar'
        />
      </div>
    </form>
  );
};

export default ReservasForm;
