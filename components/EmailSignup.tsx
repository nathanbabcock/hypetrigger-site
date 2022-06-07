import styles from '../styles/EmailSignup.module.scss'

export default function EmailSignupSection() {
  return (
    <>
      <div id="mc_embed_signup" className={styles.mailchimp}>
        <form
          action="https://hypetrigger.us11.list-manage.com/subscribe/post?u=e07dc2c0f2663f546ed1d7448&amp;id=0e73a47f3c"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe to weekly patch notes via email</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
              />
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              />
              <div
                className="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              />
            </div>
            <div
              aria-hidden="true"
              style={{ position: 'absolute', left: -5000 }}
            >
              <input
                type="text"
                name="b_e07dc2c0f2663f546ed1d7448_0e73a47f3c"
                tabIndex={-1}
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                />
                {/* <p className="brandingLogo">
                  <a
                    href="http://eepurl.com/h3SP0z"
                    title="Mailchimp - email marketing made easy and fun"
                  >
                    <img
                      src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_light_dtp.svg"
                      alt=""
                    />
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
