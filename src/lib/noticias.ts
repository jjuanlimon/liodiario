import { getCollection, type CollectionEntry } from 'astro:content';

export type Noticia = CollectionEntry<'noticias'>;

export async function getNoticias(): Promise<Noticia[]> {
  const all = await getCollection('noticias');
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function fechaLarga(d: Date): string {
  return d.toLocaleDateString('es-DO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

// Convierte un enlace de YouTube en el código para mostrar el video
export function youtubeId(url?: string | null): string | null {
  if (!url) return null;
  const m = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/))([\w-]{11})/,
  );
  return m ? m[1] : null;
}
