import { readFileSync } from 'fs'
import { join, resolve } from 'path'

export default function getConfig(game: string): any {
  const __dirname = resolve()
  const configFilename = join(__dirname, `../hypetrigger/src/configs/${game}.json`)
  const configRaw = readFileSync(configFilename, 'utf8')
  const config = JSON.parse(configRaw)
  return config
}
