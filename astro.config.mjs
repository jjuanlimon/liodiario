// Configuración principal del sitio
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://liodiario.com',
  trailingSlash: 'ignore',
  // Secciones renombradas: los enlaces viejos siguen funcionando
  redirects: {
    '/categoria/apagones': '/juegos',
    '/categoria/barrio': '/categoria/entretenimiento',
    '/categoria/transito': '/categoria/actualidad',
  },
});
