import { readdirSync, readFileSync } from 'fs'
import { join, resolve } from 'path'
import type { Config } from '../../hypetrigger-app/src/configs'

export const CONFIG_BLACKLIST = [
  'blank-config',
  'blank-trigger',
  'custom-config',
  'custom-trigger',
  'debug-image-average',
  'debug-thresholds-by-10',
  'debug-thresholds-duplicate',
]

export function getConfig(game: string): Config {
  const __dirname = resolve()
  const configFilename = join(__dirname, `../hypetrigger-app/src/configs/${game}.json`)
  const configRaw = readFileSync(configFilename, 'utf8')
  const config = JSON.parse(configRaw) as Config
  return config
}

export function getConfigIds(): string[] {
  const __dirname = resolve()
  const configsFolder = join(__dirname, '../hypetrigger-app/src/configs')
  const files = readdirSync(configsFolder)
    .filter(file => file.endsWith('.json'))
    .map(game => game.split('.json')[0])
    .filter(id => !CONFIG_BLACKLIST.includes(id))
  return files
}
