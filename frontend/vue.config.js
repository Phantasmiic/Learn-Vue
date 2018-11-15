module.exports = {
  outputDir: '../dist',
  assetsDir: './static',
  baseUrl: './',

  devServer: {
    proxy: 'http://localhost:5000' // So that the client dev server can access your Flask routes
}
}