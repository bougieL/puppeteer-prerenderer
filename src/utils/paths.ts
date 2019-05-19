import {
  ensureDirSync,
  writeFileSync,
  pathExistsSync,
  createWriteStream
} from 'fs-extra'
import { resolve, join } from 'path'
import axios from 'axios'

const dist = resolve(__dirname, '../dist/')

export function writeFile(url, content) {
  const path = getFilePathFromUrl(url)
  writeFileSync(path, content)
}

export async function saveFile(url) {
  const path = getFilePathFromUrl(url)
  await axios({
    method: 'get',
    url,
    responseType: 'stream'
  }).then(function(response) {
    response.data.pipe(createWriteStream(path))
  })
}

export function isFileExists(url) {
  const filePath = getFilePathFromUrl(url)
  return pathExistsSync(filePath)
}

function getFilePathFromUrl(url) {
  url = url.split('?')[0].split('#')[0]
  if (!/\.\w+$/.test(url)) {
    url = /\/$/.test(url) ? url + 'index.html' : url + '/index.html'
  }
  let filename = url.split('/').reverse()[0]
  const dir = join(dist, url.replace(filename, '').replace(/http(s?):\/\//, ''))
  ensureDirSync(dir)
  return join(dir, filename)
}
