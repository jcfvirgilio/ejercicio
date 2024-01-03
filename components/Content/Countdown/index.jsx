import React, { useEffect, useState, useCallback } from 'react';

const CountdownCustom = () => {
  // Estado para almacenar el tiempo restante del contador
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Estado para almacenar la fecha objetivo del contador
  const [countdownDate, setCountdownDate] = useState(() => {
    // Establecer la fecha objetivo al 3 de enero de 2024 a las 00:00:00
    const targetDate = new Date(2024, 0, 8, 0, 0, 0, 0);
    return targetDate;
  });

  // Función para actualizar el contador
  const updateCountdown = useCallback(() => {
    // Obtener la fecha y hora actual
    const currentDate = new Date();
    // Calcular la diferencia de tiempo entre la fecha objetivo y la actual
    const timeDifference = countdownDate - currentDate;

    // Verificar si el tiempo restante es mayor que cero
    if (timeDifference > 0) {
      // Calcular días, horas, minutos y segundos
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Actualizar el estado del contador
      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });

      // Programar la próxima actualización después de 1 segundo
      setTimeout(updateCountdown, 1000);
    } 
  }, [countdownDate]);

  // Efecto para iniciar el contador y limpiar el temporizador en la desmontura del componente
  useEffect(() => {
    updateCountdown();
    return () => clearTimeout(updateCountdown);
  }, [updateCountdown]);

  // JSX que representa la interfaz del contador
  return (
    <div className='flex w-full  flex-col items-center justify-center'>
      <div style={{ fontFamily: 'Exo', fontSize: '1.8rem', fontWeight: '700' }}>FALTAN</div>

      <div className="flex space-x-2 ">
        {/* Componentes para mostrar días, horas, minutos y segundos */}
        <div className="flex w-14 flex-col items-center rounded-full border-2 border-white p-1 outline-1">
          <div className=''>
            {countdown.days}
          </div>
          <p className="text-xxs">Días</p>
        </div>
        <div className="flex w-14 flex-col items-center rounded-full border-2 border-white p-1 outline-1">
          <div className=""  >
            {countdown.hours}
          </div>
          <p className="text-xxs">HRS</p>
        </div>
        <div className="flex w-14 flex-col items-center rounded-full border-2 border-white p-1 outline-1">
          <div className=""  >
            {countdown.minutes}
          </div>
          <p className="text-xxs">MIN</p>
        </div>
        <div className="flex w-14 flex-col items-center rounded-full border-2 border-white p-1 outline-1">
          <div className=""  >
            {countdown.seconds}
          </div>
          <p className="text-xxs">SEG</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownCustom;
