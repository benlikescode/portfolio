import { LocationMarkerIcon, MailIcon } from '@heroicons/react/solid'
import { FC } from 'react'
import { StyledContact } from '.'
import { Button } from '../../Button'
import { Icon } from '../../Icon'
import { Input } from '../../Input'

const Contact: FC = () => {
  return (
    <StyledContact>
      <section className="contactSection" id="contact">
        <section className="contactLeft">
          <h3>Contact Me</h3>
          <p className="contactText">Feel free to send me a message or an email, if you want to connect! </p>
          <div className="contactInfoWrapper">
            <div className="contactItem">
              <div className="contactIcon">
                <Icon size={24} fill="#fff">
                  <MailIcon />
                </Icon>
              </div>
              <span>benhoeg@outlook.com</span>
            </div>

            <div className="contactItem">
              <div className="contactIcon">
                <Icon size={24} fill="#fff">
                  <LocationMarkerIcon />
                </Icon>
              </div>
              <span>Nova Scotia, Canada</span>
            </div>
          </div>
        </section>

        <form className="contactForm" name="contact" method="POST" data-netlify="true">
          <div className="topInputs">
            <Input type="text" name="name" label="Name" maxLength={60}/>
            <Input type="text" name="email" label="Email" maxLength={60}/>
          </div>
          <Input type="text" name="message" label="Message" maxLength={2000} isTextArea/>
          <Button type="solid" width="100%">Send Message</Button>
        </form>
      </section>
    </StyledContact>
  )
}

export default Contact
