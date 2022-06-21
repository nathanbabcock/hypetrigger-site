import { ComponentPropsWithoutRef } from 'react'
import { DISCORD_SERVER_ID } from '../fetch/discord'

export default function DiscordWidget(
  props: ComponentPropsWithoutRef<'iframe'>
) {
  return (
    <iframe
      src={`https://discord.com/widget?id=${DISCORD_SERVER_ID}&theme=dark`}
      width="350"
      height="500"
      frameBorder="0"
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      {...props}
    />
  )
}
