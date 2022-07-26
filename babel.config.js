module.exports = {
  presets: ['@babel/preset-react', 'next/babel'],
  plugins: [
    [
      'import',
      {
        libraryName: 'antd'
      }
    ]
  ],
  overrides: [
    {
      include: ['./node_modules'],
      plugins: [
        [
          'babel-plugin-transform-require-ignore',
          {
            extensions: ['.css']
          }
        ]
      ]
    }
  ]
};
