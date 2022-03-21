import type { NextPage } from 'next'
import Head from 'next/head'
import { Navbar, Footer } from '../components/Sections'
import styled from 'styled-components'
import Link from 'next/link'
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
  font-size: clamp(1.6rem, 15vw, 6rem);
`

const StyledSubTitle = styled.h2`
  color: ${({ theme }) => theme.color.light};
  font-size: clamp(1.2rem, 5vw, 3rem);
  margin-top: 1rem;
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

const ThanksPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Thank You!</title>
      </Head>

      <Navbar />

      <StyledMain>
        <HeroGradient />

        <StyledTitle>Thank you!</StyledTitle>
        <StyledSubTitle>Your message has been sent.</StyledSubTitle>

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

export default ThanksPage

