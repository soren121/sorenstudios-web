import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';

export default defineConfig({
    site: 'https://www.sorenstudios.com',
    integrations: [
        partytown({
            // Adds dataLayer.push as a forwarding-event.
            config: {
                forward: ["dataLayer.push"],
            },
        }),
    ],
});
