const {
  createSPAServer
} = require('../lib')
const path = require('path')

createSPAServer({
  port: 4200,
  dist: path.resolve(__dirname, '../../hiui/dist'),
  single: false,
  base: '/hiui',
  log: true
})
