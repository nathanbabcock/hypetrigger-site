import { mkdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname } from 'path'
import type { JSONValue } from '../types'

export function writeCache(path: string, data: JSONValue) {
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, JSON.stringify(data, null, 2))
  console.log(`[cache] Wrote cache to ${path}`)
}

export function readCache<T extends JSONValue>(path: string): T | undefined {
  try {
    return JSON.parse(readFileSync(path, 'utf8')) as T
  } catch (e) {
    console.warn(`[cache] No cache found at ${path}`)
    return undefined
  }
}
