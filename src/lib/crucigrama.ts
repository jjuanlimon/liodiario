// Herramientas compartidas por los juegos: azar con semilla y armado del crucigrama.

// Azar con semilla (mulberry32): con la misma semilla siempre salen los mismos números.
export function crearAzar(semilla: number) {
  return () => {
    semilla = (semilla + 0x6d2b79f5) | 0;
    let t = Math.imul(semilla ^ (semilla >>> 15), 1 | semilla);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function barajar<T>(a: T[], rnd: () => number) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export type Palabra = { palabra: string; pista: string };
export type Colocada = Palabra & { f: number; c: number; h: boolean; num: number };
const clave = (f: number, c: number) => f + ',' + c;

// Arma el tablero cruzando palabras. Prueba muchos órdenes y se queda con el que meta más palabras
// (y, si empatan, el más pequeño). Siempre da el mismo resultado para la misma lista.
// N = tamaño máximo del tablero. 17 deja meter 20 palabras y aún cabe en un celular.
export function armarCrucigrama(lista: Palabra[], N = 17, intentos = 3000) {
  const rnd = crearAzar([...lista.map((p) => p.palabra).join('')].reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) | 0, 7));
  let mejor: Colocada[] = [], mejorArea = Infinity;
  for (let intento = 0; intento < intentos; intento++) {
    const celdas = new Map<string, { l: string; h: boolean; v: boolean }>();
    const puestas: Colocada[] = [];
    const poner = (w: Palabra, f: number, c: number, h: boolean) => {
      for (let i = 0; i < w.palabra.length; i++) {
        const k = clave(h ? f : f + i, h ? c + i : c);
        const x = celdas.get(k) ?? { l: w.palabra[i], h: false, v: false };
        if (h) x.h = true; else x.v = true;
        celdas.set(k, x);
      }
      puestas.push({ ...w, f, c, h, num: 0 });
    };
    // Cuántas letras cruza la palabra en esa posición, o -1 si no cabe o queda pegada a otra.
    const cruces = (p: string, f: number, c: number, h: boolean) => {
      const df = h ? 0 : 1, dc = h ? 1 : 0;
      if (f < 0 || c < 0 || f + df * (p.length - 1) >= N || c + dc * (p.length - 1) >= N) return -1;
      if (celdas.has(clave(f - df, c - dc)) || celdas.has(clave(f + df * p.length, c + dc * p.length))) return -1;
      let n = 0;
      for (let i = 0; i < p.length; i++) {
        const ff = f + df * i, cc = c + dc * i, x = celdas.get(clave(ff, cc));
        if (x) { if (x.l !== p[i] || (h ? x.h : x.v)) return -1; n++; }
        else if (celdas.has(clave(ff + dc, cc + df)) || celdas.has(clave(ff - dc, cc - df))) return -1;
      }
      return n;
    };
    // La mitad de los intentos empieza por las palabras largas; la otra mitad, en cualquier orden.
    const orden = intento % 2
      ? barajar([...lista], rnd)
      : lista.map((w) => ({ w, k: w.palabra.length + rnd() * 4 })).sort((a, b) => b.k - a.k).map((x) => x.w);
    const [primera, ...resto] = orden;
    poner(primera, Math.floor(N / 2), Math.floor((N - primera.palabra.length) / 2), true);
    let pendientes = resto, avanzo = true;
    while (avanzo) {
      avanzo = false;
      pendientes = pendientes.filter((w) => {
        let pos: [number, number, boolean] | null = null, max = -Infinity;
        for (const [k, x] of celdas) {
          if (x.h && x.v) continue;
          const [f, c] = k.split(',').map(Number);
          for (let i = 0; i < w.palabra.length; i++) {
            if (w.palabra[i] !== x.l) continue;
            const h = !x.h, ff = h ? f : f - i, cc = h ? c - i : c;
            const n = cruces(w.palabra, ff, cc, h);
            if (n < 1) continue;
            // Más cruces es mejor; cerca del centro deja espacio para las demás; un poco de azar da variedad.
            const medio = (w.palabra.length - 1) / 2;
            const lejos = Math.abs((h ? ff : ff + medio) - N / 2) + Math.abs((h ? cc + medio : cc) - N / 2);
            const puntos = n * 6 - lejos + rnd() * 3;
            if (puntos > max) { max = puntos; pos = [ff, cc, h]; }
          }
        }
        if (!pos) return true;
        poner(w, ...pos);
        avanzo = true;
        return false;
      });
    }
    const fs = puestas.map((p) => [p.f, p.f + (p.h ? 0 : p.palabra.length - 1)]).flat();
    const cs = puestas.map((p) => [p.c, p.c + (p.h ? p.palabra.length - 1 : 0)]).flat();
    const area = (Math.max(...fs) - Math.min(...fs) + 1) * (Math.max(...cs) - Math.min(...cs) + 1);
    if (puestas.length > mejor.length || (puestas.length === mejor.length && area < mejorArea)) { mejor = puestas; mejorArea = area; }
  }

  // Recortar los bordes vacíos y numerar como en los crucigramas de papel.
  const minF = Math.min(...mejor.map((p) => p.f)), minC = Math.min(...mejor.map((p) => p.c));
  mejor.forEach((p) => { p.f -= minF; p.c -= minC; });
  const alto = Math.max(...mejor.map((p) => p.f + (p.h ? 1 : p.palabra.length)));
  const ancho = Math.max(...mejor.map((p) => p.c + (p.h ? p.palabra.length : 1)));
  mejor.sort((a, b) => a.f - b.f || a.c - b.c);
  const nums = new Map<string, number>();
  for (const p of mejor) {
    if (!nums.has(clave(p.f, p.c))) nums.set(clave(p.f, p.c), nums.size + 1);
    p.num = nums.get(clave(p.f, p.c))!;
  }
  const faltan = lista.filter((w) => !mejor.some((p) => p.palabra === w.palabra)).map((w) => w.palabra);
  return { puestas: mejor, alto, ancho, faltan };
}
