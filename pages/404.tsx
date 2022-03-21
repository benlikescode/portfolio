import styled from 'styled-components'
import Head from 'next/head'
import Link from 'next/link'
import { Navbar, Footer } from '../components/Sections'
import { HeroGradient } from '../components/Gradients'
import { Icon } from '../components/Icon'
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'

const StyledMain = styled.main`
  height: calc(100vh - 63.59px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 1.25rem;
  position: relative;
  overflow: hidden;
  margin-top: -100px;
  padding-top: 100px;
`

const StyledTitle = styled.h1`
  color: var(--color1);
  font-size: clamp(5rem, 20vw, 10rem);
`

const StyledSubTitle = styled.h2`
  color: ${({ theme }) => theme.color.light};
  font-size: clamp(2rem, 3vw, 5rem);
`

const HomeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  height: 42px;
  padding: 0 25px;
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  user-select: none;
  background-color: ${({ theme }) => theme.color.primary};
  width: fit-content;
  color: var(--color1);
  margin-top: 2rem;

  span {
    margin-right: 8px;
  }
`

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>

      <Navbar />

      <StyledMain>
        <HeroGradient />

        <StyledTitle>404</StyledTitle>
        <StyledSubTitle>Page Not Found</StyledSubTitle>

        <Link href="/" passHref>
          <HomeButton>
              <span>Return To Home Page</span>
              <Icon size={24} fill="#fff">
                <ArrowNarrowRightIcon />
              </Icon>
            </HomeButton>
        </Link>
      </StyledMain>
      
      <Footer />
    </>  
  )
}