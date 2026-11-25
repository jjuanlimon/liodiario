// ==============================================
//  AJUSTES GENERALES DE LÍO DIARIO
//  Puedes cambiar los textos que están entre comillas.
// ==============================================

export const SITE = {
  name: 'Lío Diario',
  url: 'https://liodiario.com',
  description:
    'Noticias inventadas de la República Dominicana. Humor y sátira sobre política, deportes, farándula, barrio, tránsito y apagones.',
  disclaimer:
    'Lío Diario es una página de humor y sátira. Las noticias marcadas como SÁTIRA son inventadas.',
  email: 'contacto@liodiario.com',
  defaultImage: '/og-default.jpg',
};

// Categorías del menú (el orden aquí es el orden del menú)
export const CATEGORIES = [
  'Política',
  'Deportes',
  'Farándula',
  'Barrio',
  'Tránsito',
  'Apagones',
] as const;

export type Category = (typeof CATEGORIES)[number];

// Google AdSense: cuando te aprueben, pon tu código "ca-pub-XXXX"
// en "client" y cambia "enabled" a true.
export const ADSENSE = {
  enabled: false,
  client: '',
};

export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
