import * as express from 'express'
import { join } from 'path'
import { Log, getHostIP } from '../utils'

export function createSPAServer({
  port = 3000,
  base = '/',
  dist,
  single = true,
  log = false,
  onCreated = () => {}
}: {
  port?: number
  base?: string
  dist: string
  single?: boolean
  log?: boolean
  onCreated?: () => void
}) {
  const app = express()

  app.use(
    base,
    express.static(dist, {
      extensions: ['html']
    })
  )
  // const router = express.Router()
  // router.get('/hiui*', )
  if (single) {
    app.get(`${base}/*`, (req, res) => {
      res.sendFile('index.html', {
        root: dist
      })
    })
  }
  if (log) {
    app.use(logger)
  }
  const server = app.listen(port, () => {
    Log.info(`server started at:`)
    Log.info(`http://localhost:${port}${base}`)
    Log.info(`http://${getHostIP()}:${port}${base}`)
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
