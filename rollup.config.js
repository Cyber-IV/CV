import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/CV.ts',  // Archivo de entrada
  output: {
    file: 'dest/CV.js',
    format: 'iife',  // Formato adecuado para navegador
  },
  plugins: [typescript()],
};
