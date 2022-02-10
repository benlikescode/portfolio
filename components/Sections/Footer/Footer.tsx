import { FC } from 'react'
import { StyledFooter } from '.'
import { Icon } from '../../Icon'
import { LinkedInIcon, GithubIcon, TwitterIcon } from '../../Icon/Socials'
import Link from 'next/link'

const Footer: FC = () => {
  return (
    <StyledFooter>
      <footer>
        <span className="footerText">Built with ❤️ by Ben Hoeg</span>

        <ul className="socials">
          <li className="socialItem">
            <a href="https://www.linkedin.com/in/benhoeg/" target="_blank" rel="noreferrer">
              <Icon size={20} fill="var(--color3)">
                <LinkedInIcon />
              </Icon>
            </a>
          </li>

          <li className="socialItem">
            <a href="https://github.com/benlikescode" target="_blank" rel="noreferrer">
              <Icon size={20} fill="var(--color3)">
                <GithubIcon />
              </Icon>
            </a>
          </li>

          <li className="socialItem">     
            <a href="https://twitter.com/benlikescode" target="_blank" rel="noreferrer">
              
            <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_96_1137)">
    <path d="M24.9999 4.7491C24.0798 5.15678 23.0925 5.43333 22.0551 5.55678C23.1144 4.92251 23.9251 3.91646 24.3094 2.72141C23.3158 3.30874 22.2191 3.73529 21.0506 3.9665C20.1149 2.96822 18.7839 2.34641 17.3076 2.34641C14.4753 2.34641 12.1789 4.64289 12.1789 7.47361C12.1789 7.87508 12.2242 8.2672 12.3116 8.64215C8.05 8.4281 4.27104 6.38631 1.74179 3.28374C1.29971 4.03987 1.04816 4.92091 1.04816 5.86135C1.04816 7.64077 1.95429 9.21078 3.32904 10.1293C2.48856 10.1012 1.69808 9.87001 1.00605 9.4857V9.54975C1.00605 12.0337 2.77443 14.1067 5.11928 14.5785C4.68966 14.6941 4.23664 14.7582 3.76797 14.7582C3.4368 14.7582 3.11654 14.7254 2.80253 14.6629C3.45551 16.7015 5.34894 18.1841 7.59228 18.2247C5.83795 19.5995 3.62586 20.4165 1.2232 20.4165C0.809232 20.4165 0.401471 20.3915 0 20.3463C2.26993 21.8038 4.96475 22.6536 7.86111 22.6536C17.2952 22.6536 22.4521 14.8395 22.4521 8.06262L22.4349 7.39869C23.4423 6.67994 24.314 5.77696 24.9999 4.74906V4.7491Z" fill="#64748B"/>
    </g>
    <defs>
    <clipPath id="clip0_96_1137">
    <rect width="25" height="25" fill="white"/>
    </clipPath>
    </defs>
  </svg>
              
            </a>
          </li>
        </ul>
      </footer>
    </StyledFooter>
  )
}

export default Footer
