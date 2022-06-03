import Layout from '../components/Layout'
import { DISCORD_INVITE } from '../fetch/discord'

export default function CustomConfigs() {
  return (
    <Layout>
      <h1>Adding support for new games in Hypetrigger: Custom Configs</h1>

      <p>
        If your game is not yet supported, don't worry: you have a few options
        to choose from:
      </p>

      <h2>Request new games support on the Hypetrigger Discord</h2>

      <p>
        Join the{' '}
        <a href={DISCORD_INVITE} target="blank">
          Hypetrigger Discord
        </a>
        , and post a message in the <code>#feature-requests</code> channel.
        While you're there, you can also check <code>#custom-configs</code> to
        see if another user has contributed a config for the game you're looking
        for.
      </p>

      <h2>Create custom configs in the Hypetrigger app UI</h2>
      <ol>
        <li>
          Select <code>Custom game config</code> from the games dropdown
        </li>
        <li>
          Click the edit button (pencil icon) on the blank starting trigger
        </li>
        <li>
          Load a video of your desired game into the app, and pause the video on
          the trigger event you'd like to detect (kill, death, win, loss, etc)
        </li>
        <li>
          Customize the crop region, filter function, and recognized text to
          capture the UI element that signifies this event
        </li>
        <li>
          The text on the screen will turn green when the trigger successfully
          detects the event
        </li>
        <li>
          Configs and triggers are automatically saved for future sessions
        </li>
        <li>
          Add more triggers with the <code>Add trigger</code> button on the
          bottom of the list
        </li>
      </ol>

      <h2>Create JSON config files</h2>
      <p>
        For a more technical approach, you can inspect and author your own JSON
        config files instead of using the GUI. Check out the{' '}
        <a
          href="https://github.com/nathanbabcock/hypetrigger-configs"
          target="blank"
        >
          <code>hypetrigger-configs</code> Github repo
        </a>{' '}
        for more information.
      </p>

      <h2>Sharing your custom config with the community</h2>
      <p>
        If your custom config works well, consider posting it on Discord{' '}
        <code>#custom-configs</code>. You can post the exported JSON along with
        the name of the game, and other users can import your settings into
        their app.
      </p>
      <p>
        Periodically, the best custom configs from the community are chosen to
        be included in the default config pack that comes with the app. If you
        choose to share your config and it makes the cut, you'll get a shoutout
        in the patch notes and everyone will benefit from your work.
      </p>
      <p>
        This community-driven approach is what allows Hypetrigger to support a
        wide variety of games and use cases.
      </p>
    </Layout>
  )
}
