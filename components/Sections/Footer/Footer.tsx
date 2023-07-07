import { FC } from 'react'
import { Icon } from '../../Icon'
import { GithubIcon, LinkedInIcon } from '../../Icon/Socials'
import { StyledFooter } from './'

const Footer: FC = () => {
  return (
    <StyledFooter>
      <footer>
        <span className="footer-text">&copy; Ben Hoeg {new Date().getFullYear().toString()}</span>

        <div className="socials">
          <a className="social-item" href="https://github.com/benlikescode" target="_blank" rel="noreferrer">
            <Icon size={20} fill="#888">
              <GithubIcon />
            </Icon>
          </a>

          <a className="social-item" href="https://www.linkedin.com/in/benhoeg/" target="_blank" rel="noreferrer">
            <Icon size={20} fill="#888">
              <LinkedInIcon />
            </Icon>
          </a>
        </div>
      </footer>
    </StyledFooter>
  )
}

export default Footer
