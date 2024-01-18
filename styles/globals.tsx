import * as styled from 'styled-components'

export const PopinAnim = styled.keyframes`
  from {
    transform: translateX(-50%) translateY(4px);
    opacity: 0;
  }
  to {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
`

export const Global = styled.createGlobalStyle`
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.color.background[0]};
    color: ${({ theme }) => theme.color.text[0]};
    font-family: ${({ theme }) => theme.typeface.inter};
    font-weight: 400;
    background-size: 30px 30px;
    background-image: ${({ theme }) => `linear-gradient(to right, ${theme.color.background[1]} 1px, transparent 1px),
      linear-gradient(to bottom, ${theme.color.background[1]} 1px, transparent 1px)`};
    width: 100vw;
    overflow-x: hidden;
  }

  html {
    background-color: ${({ theme }) => theme.color.background[0]};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    scroll-behavior: smooth !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  input,
  button,
  select,
  textarea {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    border: 0;
    font-family: ${({ theme }) => theme.typeface.inter};
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  /* Custom Scrollbar */

  ::-webkit-scrollbar {
    width: 0.75rem;
    background: ${({ theme }) => theme.color.scrollbar};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.scrollbarThumb};
  }

  [data-tooltip] {
    position: relative;
  }

  [data-tooltip]::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: calc(100% + 6px);
    background: white;
    height: 27px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 13px;
    text-align: center;
    padding: 0 12px;
    display: none;
    align-items: center;
    border-radius: 50rem;
    font-weight: 600;
    color: #0a0a0a;
    pointer-events: none;
    animation: ${PopinAnim} 0.2s forwards;
  }

  [data-tooltip]:hover::after {
    display: flex;
  }

  *:focus {
    outline: 2px solid ${({ theme }) => theme.color.mode.primary};
    outline-offset: 2px;
  }

  ::selection {
    background-color: ${({ theme }) => `${theme.color.mode.primary}50`};
  }
`
