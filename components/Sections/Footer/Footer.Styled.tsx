import styled from 'styled-components'

const StyledFooter = styled.div`
  background-color: var(--background2);
  border-top: 1px solid var(--borderColor);
  display: flex;
  align-items: center;
  justify-content: center;

  footer {
    max-width: ${({ theme }) => `${theme.breakpoint.l}px`};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0;
  }

  .socials {
    display: flex;
    align-items: center;
    gap: 23px;
  }
`

export default StyledFooter
