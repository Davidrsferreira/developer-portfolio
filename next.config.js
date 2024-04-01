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
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: 'service_ehbi9sr',
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: 'emailJs_template',
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: '6L45PT2kfCbBuXoU2'
  }
}
