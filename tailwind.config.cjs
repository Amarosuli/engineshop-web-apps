const config = {
   content: ['./src/**/*.{html,js,svelte,ts}'],

   theme: {
      extend: {}
   },

   plugins: [require('daisyui')],
   daisyui: {
      // themes: ["lemonade", "winter"]
      themes: ['winter']
   }
};

module.exports = config;
