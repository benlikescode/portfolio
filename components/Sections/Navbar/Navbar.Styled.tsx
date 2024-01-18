import styled from 'styled-components'

const StyledNavbar = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  transition: 0.2s ease-in;
  padding: 0 1.25rem;
  font-weight: 500;
  z-index: 20;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.color.background[0]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  backdrop-filter: blur(15px) saturate(2);

  header {
    max-width: ${({ theme }) => theme.breakpoint.maxWidth};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-group {
      display: flex;
      align-items: center;
      gap: 32px;
    }

    .avatar-wrapper {
      height: 36px;
      width: 36px;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.color.mode.avatar};
      display: flex;
      align-items: center;
      justify-content: center;

      .avatar {
        height: 28px;
        width: 28px;
        position: relative;

        img {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          object-fit: cover;
          border-radius: 50%;
          height: 100%;
          width: 100%;
        }
      }
    }

    .links-wrapper {
      display: flex;
      align-items: center;
      gap: 20px;

      @supports (-webkit-touch-callout: none) and (not (translate: none)) {
        li {
          &:not(:last-child) {
            margin-right: 30px;
          }
        }

        @media (max-width: 900px) {
          li {
            &:not(:last-child) {
              margin-right: 20px;
            }
          }
        }
      }

      .nav-link {
        padding: 0.5rem;
        border-radius: 1rem;
        font-family: ${({ theme }) => theme.typeface.graphik};
        font-size: 14px;
        color: #777;

        @media (max-width: 600px) {
          display: none;
        }
      }
    }

    .theme-buttons {
      display: flex;
      align-items: center;
      gap: 8px;

      .theme-switcher {
        background: transparent;
        border: 1px solid ${({ theme }) => theme.color.border};
        border-radius: 8px;
        height: 32px;
        width: 32px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          height: 16px;
          color: #777;
        }

        .current-theme {
          height: 14px;
          width: 14px;
          border-radius: 50%;
          background-color: ${({ theme }) => theme.color.mode.primary};
        }
      }
    }
  }
`

export default StyledNavbar
