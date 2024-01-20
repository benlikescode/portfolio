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
  height: calc(60vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;
  position: relative;
  overflow: hidden;
  font-family: ${({ theme }) => theme.typeface.climate};

  .hero-content {
    max-width: 1400px;
    width: 100%;
    display: grid;
    gap: 1rem;
    text-align: center;
    pointer-events: none;
    z-index: 9;

    .cta-title {
      margin-bottom: 2rem;
      font-family: ${({ theme }) => theme.typeface.graphik};
      font-size: 90px;
      color: ${({ theme }) => theme.color.heroName};
      font-weight: 500;
      font-family: ${({ theme }) => theme.typeface.climate};
      text-shadow: 0 10px 0px ${({ theme }) => theme.color.mode.secondary},
        0 20px 0px ${({ theme }) => theme.color.mode.primary}, 0 6px 19px ${({ theme }) => theme.color.mode.primary}6b;
      -webkit-text-stroke: 1px ${({ theme }) => theme.color.mode.primary};
      text-transform: uppercase;
      user-select: none;

      @media (max-width: 1100px) {
        font-size: 100px;
      }

      @media (max-width: 850px) {
        font-size: 70px;
      }

      @media (max-width: 650px) {
        font-size: 60px;
      }

      @media (max-width: 500px) {
        font-size: 40px;
      }
    }
  }

  .down-indicator {
    display: grid;
    align-content: center;
    justify-content: center;
    gap: 8px;
    height: 40px;
    width: 40px;
    position: absolute;
    left: 50%;
    bottom: 40px;
    transform: translateX(-50%);
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.transparent[100]};
    color: ${({ theme }) => theme.color.text[50]};

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
