import { FC, FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Button } from '../../Button'
import { Input } from '../../Input'
import { StyledContact } from './'

const Contact: FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault()
    toast.success('I got your message!')
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <StyledContact>
      <section className="contact-section" id="contact">
        <h2>Contact Me</h2>

        <form className="contact-form" name="contact" data-netlify="true" onSubmit={(e) => handleFormSubmit(e)}>
          <input type="hidden" name="form-name" value="contact" />

          <div className="top-inputs-wrapper">
            <Input type="text" name="name" label="Name" callback={setName} value={name} maxLength={60} isRequired />
            <Input type="text" name="email" label="Email" callback={setEmail} value={email} maxLength={60} isRequired />
          </div>

          <Input
            type="text"
            name="message"
            label="Message"
            callback={setMessage}
            value={message}
            maxLength={2000}
            isTextArea
            isRequired
          />

          <Button buttonType="solid" width="100%">
            Send Message
          </Button>
        </form>
      </section>
    </StyledContact>
  )
}

export default Contact
