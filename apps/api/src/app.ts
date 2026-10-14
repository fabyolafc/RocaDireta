import cors from 'cors'
import express from 'express'
import helmet from 'helmet'

import { errorHandler, notFoundHandler } from './middlewares/errorHandler.js'
import { healthRouter } from './routes/health.js'
import { env } from './utils/env.js'

export const app = express()

app.use(helmet())
app.use(
  cors({
    origin: env.WEB_ORIGIN,
  }),
)
app.use(express.json({ limit: '100kb' }))

app.use(healthRouter)

app.use(notFoundHandler)
app.use(errorHandler)
