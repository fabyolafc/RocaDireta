const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3333'

export class HttpError extends Error {
  status: number

  constructor(status: number, message: string) {
    super(message)
    this.name = 'HttpError'
    this.status = status
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...init?.headers },
    ...init,
  })

  if (!response.ok) {
    throw new HttpError(response.status, `Request to ${path} failed`)
  }

  return response.json() as Promise<T>
}

export const httpClient = {
  get: <T>(path: string) => request<T>(path),
}
