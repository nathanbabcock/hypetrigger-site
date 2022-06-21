import Layout from '../components/Layout'
import { DISCORD_INVITE } from '../fetch/discord'
import styles from '../styles/Article.module.scss'

export default function Article() {
  return (
    <Layout>
      <div className={styles.article}>
        <h1>
          Three methodologies for automated video game highlight detection and
          capture
        </h1>
        <strong>Nathan Babcock, Benjamin Clingan</strong>
        <i> &mdash; 6:06 PM CDT • September 10, 2021</i>
        <div>
          <a
            href="https://techcrunch.com/2021/09/10/3-methodologies-for-automated-video-game-highlight-detection-and-capture/"
            target="blank"
          >
            Original article published on
            <img
              src="/img/techcrunch.svg"
              alt=""
              className={styles.techcrunchLogo}
            />
            TechCrunch
          </a>
        </div>

        <img
          src="https://techcrunch.com/wp-content/uploads/2021/09/GettyImages-1190641416.jpg?w=1390&crop=1"
          alt=""
          className={styles.img}
        />

        <div>
          <strong>Image Credits: </strong>
          <a
            href="https://www.gettyimages.com/search/photographer?family=creative&photographer=mikkelwilliam"
            target="blank"
          >
            mikkelwilliam
          </a>
          / Getty Images
        </div>
        <div className={styles.sidebar}>
          <div>
            <a href="https://www.linkedin.com/in/nathan-babcock/">
              <strong>Nathan Babcock</strong>
            </a>{' '}
            is a computer scientist and freelance writer in Chicago and a
            co-founder of automated highlight detection startup{' '}
            <a href="https://hypetrigger.io">Hypetrigger</a>.
          </div>
          <div>
            <strong>Benjamin Clingan</strong> is a software developer
            specializing in Python back ends, finance, genetic neural networks
            and other machine learning strategies and a co-founder of automated
            highlight detection startup{' '}
            <a href="https://hypetrigger.io">Hypetrigger</a>.
          </div>
        </div>
        <p>
          With the rise of livestreaming, gaming has evolved from a toylike
          consumer product to a legitimate platform and medium in its own right
          for entertainment and competition. Twitch’s viewer base alone has
          grown from 250k average concurrent viewers to over 3 million since its
          acquisition by Amazon in 2014. Competitors like Facebook Gaming and
          Youtube Live are following similar trajectories. The boom in
          viewership has fuelled an ecosystem of supporting products, as today’s
          professional streamers push technology to its limit to increase the
          production value of their content and automate repetitive aspects of
          the video production cycle.
        </p>
        <p>
          The online streaming game is a grind, with full time creators putting
          in 8 if not 12 hour performances on a daily basis. 24-hour marathon
          streams are not uncommon either, as a bid to capture valuable viewer
          attention. However, these hours in front of camera and keyboard are
          only half of the streaming grind. Maintaining a constant presence on
          social media and Youtube fuels the growth of the stream and attracts
          more viewers to catch a stream live, where they may purchase monthly
          subscriptions, donate, and watch ads. Distilling the most impactful
          5-10 minutes of content out of 8+ hours of raw video becomes a
          non-trivial time commitment. At the top of the food chain, the largest
          streamers can hire teams of video editors and social media managers to
          tackle this part of the job, but growing and part-time streamers
          struggle to find the time to do this themselves, or the money to
          outsource it. There aren’t enough minutes in the day to carefully
          review all the footage on top of other life and work priorities.
        </p>

        <h2>Computer vision analysis of game UI</h2>

        <p>
          An emerging solution is to use automated tools to identify key moments
          in a longer broadcast. Several startups compete to dominate this
          emerging niche. Differences in their approaches to solving this
          problem are what differentiate competing solutions from each other.
          Many of these different approaches follow a classic computer science
          hardware-vs-software dichotomy. This article examines the major
          players in each category, as well as a few up-and-comers seeking to
          disrupt the current status quo in streaming gameplay analysis.
        </p>

        <p>
          <a href="https://athenascope.com/" target="blank">
            Athenascope
          </a>{' '}
          was one of the first companies to execute on this concept at scale.
          Backed by $2.5M of venture capital funding and an impressive team of
          Silicon Valley big-tech alumni, Athenascope developed a computer
          vision system to identify highlight clips within longer recordings. In
          principle, it’s not so different from how self-driving cars operate,
          but instead of using cameras to read nearby road signs and traffic
          lights, the tool captures the gamer’s screen and recognizes indicators
          in the game’s user interface which communicate important events
          happening in-game: kills and deaths, goals and saves, wins and losses.
          These are the same visual cues which traditionally inform the game’s
          player what is happening in the game. In modern game UIs this
          information is high-contrast, clear and unobscured, and typically
          located in predictable, fixed locations on the screen at all times.
          This predictability and clarity lends itself extremely well to
          computer vision techniques such as optical character recognition (OCR)
          -- reading text from an image. The stakes here are lower than
          self-driving cars too, since a false positive from this system
          produces merely a less-exciting-than-average video clip, rather than a
          car crash.
        </p>

        <p>
          A computer vision methodology has drawbacks, though. The AI required
          is computation-heavy -- too heavy for an average user to run while
          their computer is already tied up with rendering a modern game at
          1080p and 60+ FPS, and encoding a live video stream on top of that.
          That means the AI has to run in the cloud. Raw video is uploaded to
          Athenascope’s server cluster -- affectionately named “Athena” -- and
          after processing, the highlights are delivered to the user’s inbox for
          downloading. The upkeep of these high-end video analytics servers is a
          cost incurred by Athenascope. Another downside is the round trip
          processing time and quality loss associated with streaming raw video
          to external servers, and back again.
        </p>

        <p>
          Early stage startups like
          <a href="https://hypetrigger.io/clipit">Clip It</a> attempt to
          eliminate this downside by streamlining the image processing AI so
          that it can be run at the edge directly on the user’s computer,
          resulting in quicker results for the users and lower infrastructure
          costs for the company.
        </p>

        <h2>Game memory access</h2>

        <p>
          The difficult tradeoffs involved in computer vision motivate a
          completely different approach to the same problem. Rather than using
          rendered video pixels as input, a program can instead inspect the
          game’s raw memory as it’s running, skipping the video rendering
          entirely and directly accessing the internal representation of in-game
          notifications and events in their purest form.
        </p>

        <p>
          <a href="https://www.overwolf.com/">Overwolf</a> is the incumbent
          pioneer of this particular variation. Founded in 2010 with a $100K
          seed investment, this year Overwolf launched a $50 million fund for
          creators utilizing on their platform, which is built on this
          methodology. In contrast to Athenascope as a consumer service,
          Overwolf monetizes by licensing its technology to other developers.
        </p>

        <p>
          Direct memory access is faster and more reliable than computer vision.
          It requires no expensive image analysis, and the data collected is
          immediately actionable. However, the practice of inspecting the
          running memory of a third party program is a security gray area. In
          fact, it’s the same method used by most cheat programs like FPS
          aimbots, a violation of games’ terms of service. As a result, a lot of
          time and effort in the game development industry is spent to block
          this approach. Game memory is often obfuscated or encrypted, and the
          anti-cheat software of many mainstream competitive games will monitor
          and block any unauthorized memory access. In June of 2021, an update
          to Call of Duty’s anticheat blocked Overwolf when it was flagged as
          malicious. It took over a month for Overwolf to work with Call of
          Duty’s development team to create a manual exception for their
          software and restore functionality for Overwolf’s customers.
        </p>

        <p>
          On top of these security issues, any update to the game’s code which
          involves a change in internal memory representation will also
          temporarily break compatibility for any memory-reliant programs, as
          the particular bits and bytes they had been utilizing for may have
          changed locations. This results in a brittleness which requires
          constant development attention, and some unavoidable amount of
          customer downtime, on every update for every supported game. In a
          sense, the cloud infrastructure maintenance cost of a computer vision
          method is traded for an ongoing development cost to stay in sync with
          game updates, as well as outreach and negotiation directly with game
          developers if necessary.
        </p>

        <p>
          <a href="https://www.playstream.gg/" target="blank">
            Playstream.gg
          </a>
          is another example of the internal memory method in action -- with
          their unique value proposition being automated in-game challenges
          rather than video clip capture.
        </p>

        <h2>GPU-integrated SDKs</h2>

        <p>
          A third distinct method can be identified among automated highlight
          detection software. This is the approach developed by Nvidia in their
          <a href="https://developer.nvidia.com/highlights" target="blank">
            Nvidia Highlights
          </a>
          software, formerly called Shadowplay. Nvidia’s unique positioning in
          the computer graphics pipeline gives them direct access to video data
          on the GPU itself -- in contrast to Athenascope which requires video
          data streaming in from across an internet connection. The result is
          lightning fast and high quality video capture. Unlike other systems,
          Nvidia delegates control over clip generation to the actual games
          themselves; they offer an SDK for game developers to hook into an
          Nvidia GPU and request a clip of the last 15-30 seconds on demand.
          This puts the onus of development onto each individual game developer,
          and if they don’t create bindings for Nvidia Highlights, it won’t be
          usable for that game. Another obvious requirement is that the users
          must have a Nvidia GPU -- AMD users will be out of luck since
          <a
            href="https://www.amd.com/en/technologies/radeon-software-gaming-media"
            target="blank"
          >
            AMD’s replay recording software
          </a>
          does not have any support for automatic highlight recording. There’s
          no way to support console gamers either (Xbox, Playstation, etc). In
          contrast, computer vision approaches are universal, and the platform
          that the video originates from is not a relevant factor in the
          compatibility of the product.
        </p>

        <p>
          A solution which combines the GPU-accelerated video capture of Nvidia
          Highlights with the computer vision methodology of Athenascope could
          be a unique combination of tradeoffs: the immediacy of Overwolf with
          the portability of a computer-vision approach, perhaps with the
          machine learning itself also running on the GPU. As of the time of
          writing, no such application utilizes this particular approach.
        </p>

        <h2>The spectrum of gameplay analysis</h2>

        <p>
          A major differentiator between competitors in this space pivots on how
          early in the video rendering pipeline the analysis occurs. Athenascope
          lives at one extreme end of this spectrum -- receiving the final video
          output for analysis, after capture, encoding, mixing with overlays or
          filters, and uploading to Athenascope servers. Hypetrigger moves the
          analysis one step closer to the user, using the same technique but in
          realtime on the user’s local computer. Overwolf and Playstream both
          move the analysis even closer to the game itself by inspecting the
          game’s memory as it’s running. Arriving at the other end of the
          spectrum, we have Nvidia Highlights, which pulls video directly from
          bare metal of the GPU, triggered from SDK bindings integrated in the
          game’s actual code itself.
        </p>

        <p>
          The subtle distinctions between these methodologies are the basis for
          competition in the niche market of automated video game highlight
          detection and capture. As computer vision AI becomes more and more
          sophisticated, the flexibility and portability of purely
          software-based approaches will become more and more competitive with
          the hardware benefits on the other side of the scale.
        </p>

        <p>
          <a href="https://hypetrigger.io">Hypetrigger</a> researches and
          prototypes these kinds of innovations in the highlight detection
          niche. If you’d like to request more information or collaborate,{' '}
          <a href={DISCORD_INVITE} target="blank">
            join the Hypetrigger discord
          </a>
          .
        </p>
      </div>
    </Layout>
  )
}
