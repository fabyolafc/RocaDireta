import { app } from './app.js'
import { env } from './utils/env.js'

app.listen(env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API do RoçaDireta rodando na porta ${env.PORT} (${env.NODE_ENV})`)
})
