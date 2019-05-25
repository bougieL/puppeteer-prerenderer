import * as express from 'express'
import { join } from 'path'
import { Log } from '../utils'

export function createSPAServer({
  port = 3000,
  base = '/',
  dist,
  callback = () => {}
}: {
  port: number
  base: string
  dist: string
  callback: () => void
}) {
  const app = express()
  const router = express.Router()
  const root = join(dist, base)
  app.use(base, express.static(root))
  router.get('*', (req, res) => {
    res.sendFile('index.html', {
      root: join(dist, base)
    })
  })
  app.use(base, router)
  const server = app.listen(port, () => {
    Log.success(`server started at http://localhost:${port}`)
    callback()
  })
  return {
    close() {
      server.close()
    }
  }
}
