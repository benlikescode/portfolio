import { FC } from 'react'
import { StyledFooter } from '.'
import { Icon } from '../../Icon'
import { LinkedInIcon, GithubIcon, TwitterIcon } from '../../Icon/Socials'

const Footer: FC = () => {
  return (
    <StyledFooter>
      <footer>
        <span>Built with ❤️ by Ben Hoeg</span>

        <ul className="socials">
          <li className="socialItem">
            <a href="https://www.linkedin.com/in/benhoeg/" target="_blank">
              <Icon size={25} fill="var(--color3)">
                <LinkedInIcon />
              </Icon>
            </a>
          </li>

          <li className="socialItem">
            <a href="https://github.com/benlikescode" target="_blank">
              <Icon size={25} fill="var(--color3)">
                <GithubIcon />
              </Icon>
            </a>
          </li>

          <li className="socialItem">
            <a href="https://twitter.com/benlikescode" target="_blank">
              <Icon size={25} fill="var(--color3)">
                <TwitterIcon />
              </Icon>
            </a>
          </li>
        </ul>
      </footer>
    </StyledFooter>
  )
}

export default Footer
