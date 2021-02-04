import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default {
  root: './example',

  alias: {
    entries: {
      '@': './example',
      '@formulate': './src',
    },
  },

  plugins: [vue(), vueJsx()],
};
