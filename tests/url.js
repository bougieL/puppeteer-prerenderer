const {
  getUrlsFromSite
} = require('../lib')

getUrlsFromSite('http://localhost:8080/bougie-design', urls => {
  console.log(urls)
})
