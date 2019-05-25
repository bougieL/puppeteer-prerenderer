const {
  renderUrlsToString
} = require('../lib')

const urls = [
  'https://www.bougieblog.cn',
  'https://www.bougieblog.cn/lab.html',
  'https://www.bougieblog.cn/message.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/about.html',
  'https://www.bougieblog.cn/abou.html',
]

renderUrlsToString({
  urls,
  onFinished() {
    process.exit(0)
  },
  callback(_, url) {
    // console.log(url)
  }
})
