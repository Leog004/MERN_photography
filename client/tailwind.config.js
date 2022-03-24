module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      height: {

        sm: '10rem',
  
        md: '20rem',
  
        lg: '28rem',
  
        xl: '40rem',

        xxl: '50rem',
       },
       animation: {
        'bounce-slow': 'bounce 4s ease-in-out infinite',
       },
       backgroundColor: theme => ({
         'primary': '#3490dc',
         'secondary': '#ffed4a',
         'danger': '#e3342f',
         'background' : '#202020',
        })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
