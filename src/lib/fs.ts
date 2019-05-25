import * as path from 'path'
import * as fs from 'fs-extra'

export function getRelativePathFromUrl(url: string) {
  url = url.replace(/\/+$/, '')
  const pathname = new URL(url).pathname
  let filename = pathname.split('/').pop()
  const relativeDir = pathname.replace(filename, '')
  if (filename) {
    filename = /\.\w+/.test(filename) ? filename : `${filename}.html`
  } else {
    filename = 'index.html'
  }
  return path.join(relativeDir, filename)
}

export function writeFile(path, content) {
  const dir = path.replace(/\/[^\/]+$/, '')
  fs.ensureDirSync(dir)
  fs.writeFileSync(path, content)
}
