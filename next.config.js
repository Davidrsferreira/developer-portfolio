const path = require('path')

module.exports = {
  basePath: "/developer-portfolio",
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true
  },
  output: "export",
  reactStrictMode: true
}
