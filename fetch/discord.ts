export const DISCORD_SERVER_ID = '872883393086521364'
export const DISCORD_INVITE = 'https://discord.gg/vCadVCzWM9'

export type DiscordWidgetJson = {
  presence_count: number
  [str: string]: unknown
}

export async function fetchDiscordJson(): Promise<DiscordWidgetJson> {
  const res = await fetch(`https://discord.com/api/guilds/${DISCORD_SERVER_ID}/widget.json`)
  const json = await res.json()
  return json
}
