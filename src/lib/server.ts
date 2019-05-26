import * as express from 'express'
import { join } from 'path'
import { Log, getHostIP } from '../utils'

export function createSPAServer({
  port = 3000,
  base = '/',
  dist,
  log = false,
  onCreated = () => {}
}: {
  port?: number
  base?: string
  dist: string
  log?: boolean
  onCreated?: () => void
}) {
  const app = express()
  const router = express.Router()
  // const root = join(dist, base)
  if (log) {
    app.use('*', logger)
  }
  app.use(base, express.static(dist))
  router.get('*', (req, res) => {
    res.sendFile('index.html', {
      root: dist
    })
  })
  app.use(base, router)
  const server = app.listen(port, () => {
    Log.success(`server started at 
          http://localhost:${port}${base}
          http://${getHostIP()}:${port}${base}`)
    onCreated()
  })
  return {
    close() {
      server.close()
    }
  }
}

function logger(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const { method, originalUrl: url } = req
  const { statusCode: code } = res
  const message = `${code}    ${method}    ${url}`
  if (code >= 200 && code < 400) {
    Log.success(message)
  } else if (code >= 400 && code < 500) {
    Log.warnning(message)
  } else if (code >= 500) {
    Log.error(message)
  } else {
    Log.info(message)
  }
  next()
}
