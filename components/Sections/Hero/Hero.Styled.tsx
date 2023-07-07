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
  height: calc(70vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;
  position: relative;
  overflow: hidden;
  font-family: 'Climate Crisis';

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
      font-family: var(--headerFont);
      font-size: 90px;
      color: #ffffff;
      font-weight: 500;
      font-family: 'Climate Crisis';
      /* text-shadow: 0 10px 0px #9c4eeb, 0 20px 0px #7928ca, 0 6px 19px #7928ca6b;
    -webkit-text-stroke: 1px #7928ca; */
      text-shadow: 0 10px 0px ${({ theme }) => theme.color.secondary}, 0 20px 0px ${({ theme }) => theme.color.primary},
        0 6px 19px ${({ theme }) => theme.color.primary}6b;
      -webkit-text-stroke: 1px ${({ theme }) => theme.color.primary};
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
