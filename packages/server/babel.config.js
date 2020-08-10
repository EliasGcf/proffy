module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],

  plugins: [
    'babel-plugin-transform-typescript-metadata', // Esses 3 plugins são responsáveis por converter os decorators presente no TypeORM
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
};
