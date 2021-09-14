import {useEffect, useState} from 'react';

export const useDebounced = (value: string, time: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  //cada vez que cambie el value, se va a ejecutar este useEffect
  //y el set timeout va a setear el debounced value con lo que sea
  //que este en value, ese value va a estar conectado con el input
  // y va a ser el que le mandemos aca, por eso va a cambiar tanto
  // y esto va a terminar enviando el debounced value tanto tiempo
  //dsp de que dejemos de escribir

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedValue(value);
    }, time);
    return () => {
      clearTimeout(debounce);
    };
  }, [value]);

  //el debounced value va a cambiar solo el tiempo despues
  //que nosotros dejemos de escribir, pq miemtras sigamos escribiendo
  //el useeffect se va a ejecutar
  return debouncedValue;
};
