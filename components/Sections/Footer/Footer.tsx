import { FC } from 'react'
import { StyledFooter } from '.'
import { Icon } from '../../Icon'
import { LinkedInIcon, GithubIcon, TwitterIcon } from '../../Icon/Socials'

const Footer: FC = () => {
  return (
    <StyledFooter>
      <footer>
        <span className="footerText">&copy; Ben Hoeg {new Date().getFullYear().toString()}</span>

        <div className="socials">
          <a className="socialItem" href="https://www.linkedin.com/in/benhoeg/" target="_blank" rel="noreferrer">
            <Icon size={20} fill="var(--color3)">
              <LinkedInIcon />
            </Icon>
          </a>
            
          <a className="socialItem" href="https://github.com/benlikescode" target="_blank" rel="noreferrer">
            <Icon size={20} fill="var(--color3)">
              <GithubIcon />
            </Icon>
          </a>
                
          <a className="socialItem" href="https://twitter.com/benlikescode" target="_blank" rel="noreferrer">
            <Icon size={20} fill="var(--color3)">
              <TwitterIcon />
            </Icon>          
          </a>     
        </div>
      </footer>
    </StyledFooter>
  )
}

export default Footer
