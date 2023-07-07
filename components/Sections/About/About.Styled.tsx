import styled from 'styled-components'

const StyledAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;
  background-color: #0a0a0a;
  border-top: 1px solid #181818;
  border-bottom: 1px solid #181818;

  .about {
    max-width: var(--maxWidth);
    width: 100%;
    padding: 3rem 0;

    h2 {
      font-size: 24px;
      font-family: var(--headerFont);
      font-weight: 600;
    }

    .about-text {
      color: rgb(139 139 139);
      font-size: 16px;
      line-height: 24px;
      max-width: 540px;
      margin-top: 1rem;

      mark {
        background-color: transparent;
        color: white;
        text-shadow: 0 0 6px ${({ theme }) => theme.color.primary};
      }
    }

    .skills-wrapper {
      margin-top: 40px;

      h3 {
        font-size: 12px;
        font-weight: 600;
        color: #707070;
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
