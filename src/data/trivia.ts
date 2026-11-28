// ==============================================
//  TRIVIA DOMINICANA: una pregunta por día del mes
//  La pregunta 1 sale el día 1, la 2 el día 2… (31 en total).
//  "respuesta" tiene que ser EXACTAMENTE igual a una de las "opciones".
//  Para cambiar el banco del mes, reemplaza las preguntas manteniendo 31.
// ==============================================

export interface Pregunta {
  pregunta: string;
  opciones: string[];
  respuesta: string;
  dato: string;
}

export const TRIVIA: Pregunta[] = [
  {
    pregunta: '¿En qué ciudad se proclamó la primera Constitución dominicana, el 6 de noviembre de 1844?',
    opciones: ['Santo Domingo', 'Santiago', 'San Cristóbal', 'Baní'],
    respuesta: 'San Cristóbal',
    dato: 'Por eso el 6 de noviembre es el Día de la Constitución. Tomó como modelo la de Estados Unidos.',
  },
  {
    pregunta: 'Pedro Santana fue el primer presidente. ¿Qué hizo en 1861 que todavía hoy divide opiniones?',
    opciones: ['Abolió el Ejército', 'Anexó el país a España', 'Vendió Samaná a EE. UU.', 'Cambió la bandera'],
    respuesta: 'Anexó el país a España',
    dato: 'Por eso hubo que pelear la Guerra de la Restauración. Unos lo ven como héroe de 1844 y otros como traidor de 1861.',
  },
  {
    pregunta: 'De los tres Padres de la Patria, ¿quién era el más joven?',
    opciones: ['Juan Pablo Duarte', 'Matías Ramón Mella', 'Francisco del Rosario Sánchez', 'Nacieron el mismo año'],
    respuesta: 'Francisco del Rosario Sánchez',
    dato: 'Duarte nació en 1813, Mella en 1816 y Sánchez en 1817.',
  },
  {
    pregunta: '¿Qué batalla se libró el 19 de marzo de 1844, apenas tres semanas después de la Independencia?',
    opciones: ['Batalla de Santiago', 'Batalla de Azua', 'Batalla de Las Carreras', 'Batalla de Beller'],
    respuesta: 'Batalla de Azua',
    dato: 'La de Santiago fue el 30 de marzo. La de Las Carreras fue en 1849.',
  },
  {
    pregunta: '¿Cuántos cacicazgos taínos había en la isla cuando llegó Colón?',
    opciones: ['3', '7', '5', '9'],
    respuesta: '5',
    dato: 'Marién, Maguá, Maguana, Jaragua e Higüey.',
  },
  {
    pregunta: '¿Qué cacica gobernaba Jaragua y fue ejecutada por los españoles en 1503?',
    opciones: ['Higuamota', 'Anacaona', 'Catalina', 'Iguanamá'],
    respuesta: 'Anacaona',
    dato: 'Era poeta y bailarina. Higuamota era su hija.',
  },
  {
    pregunta: 'Mucha gente cree que la patrona del país es la Altagracia. ¿Quién es la patrona oficial?',
    opciones: ['La Virgen de la Altagracia', 'La Virgen de la Candelaria', 'La Virgen de la Caridad', 'La Virgen de las Mercedes'],
    respuesta: 'La Virgen de las Mercedes',
    dato: 'Las Mercedes es la patrona (24 de septiembre). La Altagracia es la "protectora" del pueblo dominicano (21 de enero).',
  },
  {
    pregunta: '¿Cuál fue la primera tradición dominicana reconocida por la UNESCO?',
    opciones: ['El merengue', 'Los Congos de Villa Mella', 'La bachata', 'Los Guloyas'],
    respuesta: 'Los Congos de Villa Mella',
    dato: 'Los Congos en 2001, los Guloyas en 2005, el merengue en 2016 y la bachata en 2019.',
  },
  {
    pregunta: '¿Qué canción se considera la primera bachata grabada, en 1962?',
    opciones: ['Borracho de amor', 'Amargura', 'Obsesión', 'Bachata rosa'],
    respuesta: 'Borracho de amor',
    dato: 'La grabó José Manuel Calderón. Hay quien dice que la bachata como tal no se formó hasta los años 80.',
  },
  {
    pregunta: '¿Con qué disco ganó Juan Luis Guerra su primer Grammy?',
    opciones: ['Ojalá que llueva café', 'Areíto', 'Bachata rosa', 'Fogaraté'],
    respuesta: 'Bachata rosa',
    dato: 'Salió en 1990 y le dio el Grammy en 1992. Muchos dicen que sacó la bachata de los colmados y la llevó al mundo.',
  },
  {
    pregunta: '¿A qué acordeonista de merengue típico le dicen "La Vieja Fefa"?',
    opciones: ['Fefita la Grande', 'Milly Quezada', 'Belkis Concepción', 'Rosa Arredondo'],
    respuesta: 'Fefita la Grande',
    dato: 'Es una leyenda del perico ripiao desde muy joven.',
  },
  {
    pregunta: '¿Quién fue el primer dominicano en jugar en las Grandes Ligas, en 1956?',
    opciones: ['Felipe Alou', 'Juan Marichal', 'Osvaldo Virgil', 'Rico Carty'],
    respuesta: 'Osvaldo Virgil',
    dato: 'Debutó con los Gigantes de Nueva York. Hay debate: si se cuentan las Ligas Negras, Tetelo Vargas llegó antes.',
  },
  {
    pregunta: '¿Qué dominicano tiene más hits en la historia de las Grandes Ligas?',
    opciones: ['Adrián Beltré', 'Robinson Canó', 'Manny Ramírez', 'Albert Pujols'],
    respuesta: 'Albert Pujols',
    dato: 'Pujols terminó con 3,384 hits y Beltré con 3,166. ¿Quién fue mejor? Ese debate no se acaba.',
  },
  {
    pregunta: '¿Quién fue el primer dominicano en jugar en la NBA?',
    opciones: ['Al Horford', 'Tito Horford', 'Felipe López', 'Karl-Anthony Towns'],
    respuesta: 'Tito Horford',
    dato: 'Llegó a los Bucks en 1988. Su hijo Al fue el primer dominicano campeón de la NBA.',
  },
  {
    pregunta: '¿En qué año fue Santo Domingo sede de los Juegos Panamericanos?',
    opciones: ['1999', '2003', '2007', '2011'],
    respuesta: '2003',
    dato: 'Para esos juegos se construyeron varias instalaciones del Centro Olímpico.',
  },
  {
    pregunta: '¿Entre qué años fue la primera ocupación militar de Estados Unidos en el país?',
    opciones: ['1904–1912', '1930–1938', '1916–1924', '1965–1966'],
    respuesta: '1916–1924',
    dato: 'Fueron ocho años. La segunda intervención fue en 1965, durante la Guerra de Abril.',
  },
  {
    pregunta: '¿Quién fue el presidente del bando constitucionalista en la Guerra de Abril de 1965?',
    opciones: ['Juan Bosch', 'Antonio Imbert Barrera', 'Héctor García-Godoy', 'Francisco Alberto Caamaño'],
    respuesta: 'Francisco Alberto Caamaño',
    dato: 'Imbert encabezó el gobierno del bando contrario y García-Godoy fue el presidente provisional después.',
  },
  {
    pregunta: '¿Cuántos meses duró el gobierno de Juan Bosch en 1963?',
    opciones: ['3', '7', '12', '18'],
    respuesta: '7',
    dato: 'Asumió el 27 de febrero y lo tumbó un golpe de Estado el 25 de septiembre.',
  },
  {
    pregunta: '¿En qué ciudad mataron al dictador Ulises Heureaux, "Lilís", en 1899?',
    opciones: ['Santiago', 'Puerto Plata', 'La Vega', 'Moca'],
    respuesta: 'Moca',
    dato: 'Lo mató un grupo de conspiradores el 26 de julio. A Moca le dicen la "Villa Heroica".',
  },
  {
    pregunta: '¿Cómo se llamaba el Pico Duarte durante la dictadura?',
    opciones: ['Pico Trujillo', 'Pico Benefactor', 'Pico Balaguer', 'Pico Colón'],
    respuesta: 'Pico Trujillo',
    dato: 'Y la capital se llamó Ciudad Trujillo desde 1936 hasta 1961.',
  },
  {
    pregunta: '¿Por dónde llegaron los expedicionarios que lucharon contra Trujillo en junio de 1959?',
    opciones: ['Samaná, Miches y Sabana de la Mar', 'Constanza, Maimón y Estero Hondo', 'Barahona, Pedernales y Azua', 'Higüey, Bávaro y La Romana'],
    respuesta: 'Constanza, Maimón y Estero Hondo',
    dato: 'De ahí nació el Movimiento 14 de Junio.',
  },
  {
    pregunta: '¿Quién escribió "En el tiempo de las mariposas", la novela sobre las hermanas Mirabal?',
    opciones: ['Junot Díaz', 'Julia Álvarez', 'Marcio Veloz Maggiolo', 'Juan Bosch'],
    respuesta: 'Julia Álvarez',
    dato: 'La escribió en inglés en 1994 y luego la llevaron al cine.',
  },
  {
    pregunta: '¿Qué escritor dominicano ganó el Premio Pulitzer?',
    opciones: ['Pedro Mir', 'Junot Díaz', 'Juan Bosch', 'Pedro Henríquez Ureña'],
    respuesta: 'Junot Díaz',
    dato: 'Lo ganó en 2008 con "La maravillosa vida breve de Óscar Wao".',
  },
  {
    pregunta: '¿Quién escribió "Over", la novela de 1939 sobre los cañaverales y los bateyes?',
    opciones: ['Manuel de Jesús Galván', 'Juan Bosch', 'Ramón Marrero Aristy', 'Federico García Godoy'],
    respuesta: 'Ramón Marrero Aristy',
    dato: 'Fue una de las primeras novelas en denunciar la explotación en los ingenios.',
  },
  {
    pregunta: '¿Quién escribió la novela "Enriquillo", publicada completa en 1882?',
    opciones: ['Manuel de Jesús Galván', 'José Joaquín Pérez', 'Salomé Ureña', 'Ramón Marrero Aristy'],
    respuesta: 'Manuel de Jesús Galván',
    dato: 'Cuenta la rebelión del cacique Enriquillo en la Sierra de Bahoruco.',
  },
  {
    pregunta: 'En el escudo nacional, ¿en qué versículo está abierta la Biblia?',
    opciones: ['Juan 3:16', 'Salmo 23', 'Génesis 1:1', 'Juan 8:32'],
    respuesta: 'Juan 8:32',
    dato: '"Y conoceréis la verdad, y la verdad os hará libres." Lo dice la Constitución.',
  },
  {
    pregunta: 'Sevilla dice que tiene los restos de Cristóbal Colón. ¿Qué monumento dominicano dice tenerlos también?',
    opciones: ['El Alcázar de Colón', 'El Faro a Colón', 'El Panteón Nacional', 'La Fortaleza Ozama'],
    respuesta: 'El Faro a Colón',
    dato: 'Un estudio de ADN de 2006 confirmó que parte de los restos de Sevilla son de Colón, pero los de aquí nunca se han analizado. El debate sigue.',
  },
  {
    pregunta: '¿De dónde vinieron los antepasados de los "americanos de Samaná", que todavía hablan inglés?',
    opciones: ['Jamaica', 'Haití', 'Estados Unidos', 'Islas Turcas'],
    respuesta: 'Estados Unidos',
    dato: 'Eran afroamericanos libres que llegaron en 1824, invitados por el presidente haitiano Boyer.',
  },
  {
    pregunta: 'El yaniqueque es la versión dominicana de una comida traída por inmigrantes de habla inglesa. ¿Cuál?',
    opciones: ['Pancake', 'Johnnycake', 'Cornbread', 'Scone'],
    respuesta: 'Johnnycake',
    dato: 'Muchos dicen que hasta el nombre viene de ahí, pero los expertos no se ponen de acuerdo.',
  },
  {
    pregunta: '¿Qué personaje es el símbolo del carnaval de La Vega?',
    opciones: ['Roba la Gallina', 'Califé', 'El diablo cojuelo', 'Los lechones'],
    respuesta: 'El diablo cojuelo',
    dato: 'Los lechones son de Santiago. Roba la Gallina y Califé son de Santo Domingo. Cada pueblo dice que su carnaval es el mejor.',
  },
  {
    pregunta: '¿Cuál es la isla más grande que pertenece a la República Dominicana, aparte de La Española?',
    opciones: ['Isla Beata', 'Isla Catalina', 'Alto Velo', 'Isla Saona'],
    respuesta: 'Isla Saona',
    dato: 'Está en el Parque Nacional del Este, frente a Bayahíbe.',
  },
];
