import styled from 'styled-components'

const StyledAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(360deg,rgba(217,70,239,0.22) 0%,rgba(0,255,240,0) 100%);
  padding: 2rem;

  .about {
    max-width: ${({ theme }) => `${theme.breakpoint.l}px`};
    width: 100%;
  }

  .skillRow {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 10px;
  }

  h3 {
    font-size: 1.8rem;
  }

  h4 { 
    font-size: 20px;
    font-weight: 500;
    color: #D0D0D0;
  }

  .aboutText {
    color: var(--color3);
    font-size: 26px;
    font-family: Graphik;
    line-height: 40px;
  }

  .skillsWrapper {
    margin-top: 3rem;
    display: grid;
    gap: 2rem;
  }
  
`

export default StyledAbout
