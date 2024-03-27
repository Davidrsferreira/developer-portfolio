const path = require('path')

module.exports = {
  basePath: "/developer-portfolio/",
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  output: "export",
  reactStrictMode: true
}
