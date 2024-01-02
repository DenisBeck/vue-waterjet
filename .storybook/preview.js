/** @type { import('@storybook/vue3').Preview } */
import { setup }  from '@storybook/vue3';
import { createPinia } from 'pinia'

const pinia = createPinia();

import '../src/assets/main.css'

setup((app) => {
    app.use(pinia);
});

const preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    }
}

export default preview
