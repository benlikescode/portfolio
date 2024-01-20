import styled from 'styled-components'

const StyledAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;
  background-color: ${({ theme }) => theme.color.bg[600]};
  border-top: 1px solid ${({ theme }) => theme.color.border};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  .about-section {
    max-width: ${({ theme }) => theme.breakpoint.maxWidth};
    width: 100%;
    padding: 3rem 0;
    scroll-margin-top: 60px;

    h2 {
      font-size: 24px;
      font-family: ${({ theme }) => theme.typeface.graphik};
      font-weight: 600;
    }

    .about-text {
      color: ${({ theme }) => theme.color.text[500]};
      font-size: 16px;
      line-height: 24px;
      max-width: 540px;
      margin-top: 1rem;

      mark {
        background-color: transparent;
        color: ${({ theme }) => theme.color.text[50]};
        text-shadow: 0 0 6px ${({ theme }) => theme.color.mode.primary};
      }
    }

    .skills-wrapper {
      margin-top: 40px;

      h3 {
        font-size: 12px;
        font-weight: 600;
        color: ${({ theme }) => theme.color.text[600]};
        text-transform: uppercase;
        letter-spacing: 0.15rem;
      }

      ul {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
      }
    }
  }
`

export default StyledAbout
