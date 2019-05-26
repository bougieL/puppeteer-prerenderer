const {
  getUrlsFromSite
} = require('../lib')

getUrlsFromSite('https://www.bougieblog.cn', urls => {
  console.log(urls)
  // process.stdout = urls
})
