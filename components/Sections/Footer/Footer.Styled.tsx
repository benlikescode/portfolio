import styled from 'styled-components'

const StyledFooter = styled.div`
  height: 60px;
  background-color: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;
  border-top: 1px solid #181818;

  footer {
    max-width: var(--maxWidth);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.3rem 0;

    .footer-text {
      font-size: 14px;
      color: #555;
    }

    .socials {
      display: flex;
      align-items: center;
      gap: 16px;

      @media (max-width: 600px) {
        gap: 1rem;
      }

      .social-item {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          height: 20px;
          width: 20px;
          fill: #555;

          &:hover {
            fill: #777;
          }
        }
      }
    }
  }
`

export default StyledFooter
