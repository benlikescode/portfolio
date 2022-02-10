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
          <h2>Contact Me</h2>
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

        <form className="contactForm" name="contact" method="POST" action="/success" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div className="topInputs">
            <Input 
              type="text" 
              name="name" 
              label="Name" 
              maxLength={60} 
              isRequired
            />
            <Input 
              type="text" 
              name="email" 
              label="Email" 
              maxLength={60} 
              isRequired
            />
          </div>
          <Input 
            type="text" 
            name="message" 
            label="Message" 
            maxLength={2000} 
            isTextArea 
            isRequired
          />
          <Button type="solid" width="100%">Send Message</Button>
        </form>
      </section>
    </StyledContact>
  )
}

export default Contact
