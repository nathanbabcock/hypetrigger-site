import { readdirSync } from 'fs'
import { join, resolve } from 'path'

export default function getConfigs(): string[] {
  const __dirname = resolve()
  const configsFolder = join(__dirname, '../hypetrigger/src/configs')
  const files = readdirSync(configsFolder)
    .filter(file => file.endsWith('.json'))
    .map(game => game.split('.json')[0])
  return files
}
