import { readdirSync } from 'fs'
import { join, resolve } from 'path'

export default function getScreenshots(): string[] {
  const __dirname = resolve()
  const screenshotsFolder = join(__dirname, 'public/screenshots')
  return readdirSync(screenshotsFolder)
    .map(filename => `/screenshots/${filename}`)
}
