import * as path from 'path'

export function cwd(...paths: string[]) {
  const base = /^\//.test(paths[0]) ? '/' : process.cwd()
  return path.join(base, ...paths)
}
