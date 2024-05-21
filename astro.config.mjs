// https://astro.build/config
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind(),
        alpinejs(),
        icon({
            include: {
                ic: ['round-arrow-left', 'round-arrow-right'],
                octicon: ['triangle-up-24'],
            },
        }),
    ],
    image: {
        domains: ['res.cloudinary'],
    },
});
