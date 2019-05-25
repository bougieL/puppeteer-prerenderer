import * as os from 'os'

export function getHostIP(): string | undefined {
  const interfaces = os.networkInterfaces()
  const overall: any[] = []
  Object.keys(interfaces).forEach((name) => {
    const infos = interfaces[name]
    Array.prototype.push.apply(overall, infos)
  })
  const cands = overall.filter(
    (info) => info.family === 'IPv4' && !info.internal
  )
  if (cands.length === 0) {
    return undefined
  }

  return cands[0].address
}
