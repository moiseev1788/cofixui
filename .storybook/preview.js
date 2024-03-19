/** @type { import('@storybook/vue3').Preview } */

 
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

import '../src/assets/css/base.css';
import '../src/assets/css/main.scss';
import '../src/assets/css/formBitrix.scss';
import '../src/assets/css/swiper-custom/swiper-stories.scss';

export default preview;


