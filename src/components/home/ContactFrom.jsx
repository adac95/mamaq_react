import React from "react";

const ContactForm = () => {
  return (
    <section className='contacto' id='contacto'>
      <form
        className='contacto__form'
        action='https://formsubmit.co/1c464ac09b5f604abd063e04aaa3d2d5'
        method='POST'
      >
        <span className='contacto__span'>¡Hola!</span>
        <h3 className='h3 contacto__h3'>
          Escríbenos y te responderemos lo antes posible 😉
        </h3>
        <input
          className='contacto__input contacto__input--placeholder'
          name='name'
          type='text'
          placeholder='Nombre'
          required
        />
        <input
          className='contacto__input contacto__input--placeholder'
          name='subject'
          type='text'
          placeholder='Asunto'
          required
        />
        <input
          className='contacto__input contacto__input--placeholder'
          name='email'
          type='email'
          placeholder='Email'
          required
        />
        <textarea
          className='contacto__input--placeholder contacto__input--textarea'
          placeholder='Mensaje'
          name='message'
          rows='8'
          required
        ></textarea>
        <input className='contacto__submit' type='submit' value='Enviar' />
        <input type='hidden' name='_subject' value='¡Nuevo envío!' />
      </form>
    </section>
  );
};

export default ContactForm;
