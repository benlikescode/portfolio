import { FC } from 'react'
import socials from '../../../utils/constants/socials'
import { GithubIcon, LinkedInIcon } from '../../Icon/Socials'
import { StyledFooter } from './'

const Footer: FC = () => {
  return (
    <StyledFooter>
      <footer>
        <span className="footer-text">&copy; Ben Hoeg {new Date().getFullYear().toString()}</span>

        <div className="socials">
          <a className="social-item" href={socials.github} target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>

          <a className="social-item" href={socials.linkedIn} target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
        </div>
      </footer>
    </StyledFooter>
  )
}

export default Footer
