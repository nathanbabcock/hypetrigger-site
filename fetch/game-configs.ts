import { readdirSync, readFileSync } from 'fs'
import { join, resolve } from 'path'
import type { Config } from 'hypetrigger/src/configs'

export function getConfig(game: string): Config {
  const __dirname = resolve()
  const configFilename = join(__dirname, `../hypetrigger/src/configs/${game}.json`)
  const configRaw = readFileSync(configFilename, 'utf8')
  const config = JSON.parse(configRaw) as Config
  return config
}

export function getConfigIds(): string[] {
  const __dirname = resolve()
  const configsFolder = join(__dirname, '../hypetrigger/src/configs')
  const files = readdirSync(configsFolder)
    .filter(file => file.endsWith('.json'))
    .map(game => game.split('.json')[0])
  return files
}
