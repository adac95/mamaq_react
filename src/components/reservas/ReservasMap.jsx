import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReservasMap } from "../../actions";

const ReservasMap = () => {
  const dispatch = useDispatch();
  const reservasMap = useSelector((state) => state.reservasMap);

  function handleResponsiveMap() {
    dispatch(setReservasMap(true));
  }

  return (
    <div className='reserva__mapa-container'>
      <div id='mapa-div' className='reserva__mapa'>
        {window.screen.width >= 769 ? (
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.8628241900956!2d-77.03551838539741!3d-12.121536891417557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b79bcada3d37%3A0x235c47397212c894!2sMamaq%20eco%20caf%C3%A9!5e0!3m2!1ses-419!2spe!4v1624055424717!5m2!1ses-419!2spe'
            width={600}
            height={450}
            style={{ border: 0 }}
            title='mapa'
            allowFullScreen=''
            loading='lazy'
          ></iframe>
        ) : !!reservasMap ? (
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.8628241900956!2d-77.03551838539741!3d-12.121536891417557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b79bcada3d37%3A0x235c47397212c894!2sMamaq%20eco%20caf%C3%A9!5e0!3m2!1ses-419!2spe!4v1624055424717!5m2!1ses-419!2spe'
            width={600}
            height={450}
            style={{ border: 0 }}
            title='mapa'
            allowFullScreen=''
            loading='lazy'
          ></iframe>
        ) : (
          <button
            id='reserva-mapa'
            className='btn mapa__btn'
            onClick={handleResponsiveMap}
          >
            Quieres ver el mapa?
          </button>
        )}
      </div>
    </div>
  );
};

export default ReservasMap;
