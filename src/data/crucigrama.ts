// ==============================================
//  CRUCIGRAMA DEL MES
//  Cada mes: cambia el TEMA y la lista de PALABRAS con sus pistas.
//  El tablero se arma solo. Reglas para las palabras:
//   - En MAYÚSCULAS, sin tildes, sin Ñ y sin espacios (entre 3 y 12 letras).
//   - Entre 12 y 20 palabras. Si alguna no cabe, el sitio no se publica y avisa cuál cambiar.
// ==============================================

export const TEMA = 'Navidad dominicana';

export const PALABRAS: { palabra: string; pista: string }[] = [
  { palabra: 'MORO', pista: 'Arroz que en Navidad se hace con guandules' },
  { palabra: 'GUANDULES', pista: 'Los que no pueden faltar en el moro de Nochebuena' },
  { palabra: 'PUERCO', pista: 'Se asa en puya en el patio el 24' },
  { palabra: 'PASTELES', pista: 'Los de hoja se envuelven en hoja de plátano' },
  { palabra: 'JENGIBRE', pista: 'Raíz del té que se toma cuando llega el friíto' },
  { palabra: 'PONCHE', pista: 'Bebida de huevo y leche, con o sin "su poquito"' },
  { palabra: 'UVAS', pista: 'Se comen doce a la medianoche del 31' },
  { palabra: 'AGUINALDO', pista: 'Canto de madrugada en las parrandas navideñas' },
  { palabra: 'PARRANDA', pista: 'Fiesta que va de casa en casa con música' },
  { palabra: 'CHARAMICO', pista: 'Arbolito hecho con ramas secas pintadas' },
  { palabra: 'NOCHEBUENA', pista: 'La noche del 24 de diciembre' },
  { palabra: 'ANGELITO', pista: 'Intercambio de regalos de la oficina' },
  { palabra: 'REGALIA', pista: 'El doble sueldo de diciembre' },
  { palabra: 'VILLANCICO', pista: 'Canción de Navidad' },
  { palabra: 'PESEBRE', pista: 'Nacimiento con el Niño Jesús, la Virgen y San José' },
  { palabra: 'REYES', pista: 'Traen regalos el 6 de enero' },
  { palabra: 'YERBA', pista: 'Los niños la ponen debajo de la cama para los camellos' },
  { palabra: 'BELEN', pista: 'La Vieja ___ trae lo que a los Reyes se les olvidó' },
  { palabra: 'APAGON', pista: 'Invitado que nadie quiere en Nochebuena' },
  { palabra: 'FRIITO', pista: 'El fresquito de diciembre que nos hace sacar el abrigo' },
];
