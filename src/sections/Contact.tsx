import { useState } from 'react'
import type { FormEvent } from 'react'
import { Icon } from '../components/Icon'
import { personal } from '../content/personal'

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<SubmissionStatus>('idle')
  const isLocalPreview = ['localhost', '127.0.0.1'].includes(window.location.hostname)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (isLocalPreview) {
      setStatus('error')
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    const body = new URLSearchParams()

    formData.forEach((value, key) => {
      if (typeof value === 'string') body.append(key, value)
    })

    setStatus('submitting')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })

      if (!response.ok) throw new Error('Form submission failed')

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-inner">
        <p className="eyebrow">Contact · Ljubljana / remote</p>
        <h2 id="contact-title">Get in touch</h2>
        <p>Earth observation platforms, geospatial web applications, and spatial analysis.</p>
        <form
          className="contact-form"
          name="contact"
          method="POST"
          action="/"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div hidden aria-hidden="true">
            <label>
              Leave this field empty
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <p className="form-note" id="contact-form-note">All fields are required. Your email is used only to reply to your message.</p>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" maxLength={100} required />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                maxLength={254}
                required
              />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows={6} maxLength={4000} required />
          </div>
          <button className="form-submit" type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Send message'}
            <Icon name="arrow-up-right" size={19} />
          </button>
          <div className="form-status" aria-live="polite">
            {status === 'success' ? <p role="status">Thank you. Your message has been sent.</p> : null}
            {status === 'error' ? (
              <p role="alert">
                {isLocalPreview
                  ? 'Messages can only be sent from the deployed Netlify site; no message was sent from this preview.'
                  : 'Your message could not be sent. Please try again later or use LinkedIn.'}
              </p>
            ) : null}
          </div>
        </form>
        <div className="contact-links">
          <a href={personal.socials.linkedin} target="_blank" rel="noreferrer">
            <Icon name="linkedin" /> LinkedIn<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={personal.socials.github} target="_blank" rel="noreferrer">
            <Icon name="github" /> GitHub<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={personal.cv.href} download>
            <Icon name="download" /> Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
