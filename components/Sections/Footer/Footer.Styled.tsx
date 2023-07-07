import styled from 'styled-components'

const StyledFooter = styled.div`
  height: 60px;
  background-color: #070707;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;
  border-top: 1px solid #141414;

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
      gap: 23px;

      @media (max-width: 600px) {
        gap: 1rem;
      }

      .social-item {
        @supports (-webkit-touch-callout: none) and (not (translate: none)) {
          &:not(:last-child) {
            margin-right: 23px;
          }

          @media (max-width: 600px) {
            margin-right: 1rem;
          }
        }
      }
    }
  }
`

export default StyledFooter
