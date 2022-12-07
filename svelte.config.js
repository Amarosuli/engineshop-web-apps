import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';
// import expressAdapter from '@mankins/svelte-adapter-express';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
   kit: {
      // adapter: expressAdapter(),
      adapter: adapter({ out: 'release' }),
      paths: {
         base: '/engineshop'
      },
      csrf: { checkOrigin: false },
      alias: {
         $comp: path.resolve('./src/comp')
      }
   },

   preprocess: [
      preprocess({
         postcss: true
      })
   ]
};

export default config;
