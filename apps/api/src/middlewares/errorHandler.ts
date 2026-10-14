import type { NextFunction, Request, Response } from 'express'

export function notFoundHandler(req: Request, res: Response): void {
  res.status(404).json({
    error: {
      message: 'Recurso não encontrado.',
      path: req.originalUrl,
    },
  })
}

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  // eslint-disable-next-line no-console
  console.error(err)

  res.status(500).json({
    error: {
      message: 'Erro interno do servidor.',
    },
  })
}
