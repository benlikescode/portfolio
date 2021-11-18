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

        <form className="contactForm">
          <div className="topInputs">
            <Input type="text" label="Name"/>
            <Input type="text" label="Email"/>
          </div>
          <Input type="text" label="Message" isTextArea/>
          <Button type="solid" width="100%">Send Message</Button>
        </form>
      </section>
    </StyledContact>
  )
}

export default Contact
