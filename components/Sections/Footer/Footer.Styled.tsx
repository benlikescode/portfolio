import styled from 'styled-components'

const StyledFooter = styled.div`
  height: 60px;
  background-color: ${({ theme }) => theme.color.bg[600]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;
  border-top: 1px solid ${({ theme }) => theme.color.border};

  footer {
    max-width: ${({ theme }) => theme.breakpoint.maxWidth};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.3rem 0;

    .footer-text {
      font-size: 14px;
      color: ${({ theme }) => theme.color.text[600]};
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
          fill: ${({ theme }) => theme.color.icon};

          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }
`

export default StyledFooter
