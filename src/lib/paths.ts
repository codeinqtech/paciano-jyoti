/** Prefix public asset paths with Vite `base` (e.g. `/design/tmp_2/`). */
export function asset(path: string): string {
  if (!path) return path
  if (/^(https?:|data:|blob:)/i.test(path)) return path
  const base = import.meta.env.BASE_URL
  const clean = path.startsWith('/') ? path.slice(1) : path
  return `${base}${clean}`
}

/** Deep-map string values that look like public `/images/...` paths. */
export function withAssets<T>(value: T): T {
  if (typeof value === 'string') {
    return (value.startsWith('/images/') ? asset(value) : value) as T
  }
  if (Array.isArray(value)) {
    return value.map((item) => withAssets(item)) as T
  }
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {}
    for (const [key, nested] of Object.entries(value)) {
      out[key] = withAssets(nested)
    }
    return out as T
  }
  return value
}
