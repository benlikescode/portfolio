import styled from 'styled-components'

const StyledAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;
  background: rgb(11 11 11);
  border-bottom: 1px solid #202020;
  border-top: 1px solid #202020;
  
  .about {
    max-width: 1000px;
    width: 100%;
    padding: 3rem 0;
  }

  .skillRow {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 10px;

    @media (max-width: 600px) {
      font-size: 1.4rem;
    }
  }

  h2 {
    font-size: 2.5rem;

    @media (max-width: 600px) {
      font-size: 1.6rem;
    }
  }

  h3 { 
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
  }

  .aboutText {
    color: #aaaaaa;
    font-size: 22px;
    line-height: 32px;
    max-width: 80%;

    @media (max-width: 600px) {
      font-size: 18px;
      line-height: 24px;
      max-width: 100%;
    }
  }

  .skillsWrapper {
    margin-top: 3rem;
    display: grid;
    gap: 2rem;
  }
`

export default StyledAbout