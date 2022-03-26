import styled, { keyframes } from 'styled-components'

const DownIndicatorAnim = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-2px);
  }
  50% {
    opacity: 1;
    transform: translateY(2px);
  }
  100% {
    opacity: 0;
    transform: translateY(-2px);
  }
`

const StyledHero = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;
  position: relative;
  overflow: hidden;
  margin-top: -100px;
  padding-top: 100px;

  .heroContent {
    max-width: 1400px;
    width: 100%;
    display: grid;
    gap: 1rem;
    margin-top: -8rem;
    text-align: center;
    pointer-events: none;
  }

  .ctaBtn {
    display: block;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    height: 42px;
    padding: 0 25px;
    font-size: 1rem;
    font-weight: 500;
    width: fit-content;
    user-select: none;
    background-color: ${({ theme }) => theme.color.primary};

    span {
      margin-right: 8px;
    }
  }

  .ctaTitle {
    margin-bottom: 2rem;
    font-family: var(--headerFont);
  }

  .header {
    display: block;
    font-size: 10rem;
    color: var(--color1);
    font-weight: 700;

    @media (max-width: 900px) {
      font-size: 7rem;
    }

    @media (max-width: 700px) {
      font-size: 6rem;
    }

    @media (max-width: 600px) {
      font-size: 4.2rem;
    }
  }

  .subHeader {
    display: block;
    font-size: 4rem;
    color: ${({ theme }) => theme.color.light};
    font-weight: 500;
    margin-top: 2rem;

    @media (max-width: 1160px) {
      font-size: 5.3rem;
    }

    @media (max-width: 900px) {
      font-size: 4rem;
    }

    @media (max-width: 700px) {
      font-size: 3.2rem;
    }

    @media (max-width: 600px) {
      font-size: 2.2rem;
    }
  }

  .downIndicator {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 40px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ffffff11;
    color: white;
    padding: 0;
    border: none;
    box-shadow: none;
    display: grid;
    align-content: center;

    @supports (-webkit-touch-callout: none) {
      bottom: 100px;
    }

    svg {
      height: 24px;
      width: 24px;

      path {
        stroke-width: 1.5px;
      }

      &:first-child {
        margin-top: 0px;
        animation: ${DownIndicatorAnim} 1.5s ease-in-out infinite;
      }

      &:last-child {
        margin-top: -20px;
        animation: ${DownIndicatorAnim} 1.5s ease-in-out infinite;
        animation-delay: 0.2s;
      }
    }
  }
`

export default StyledHero
