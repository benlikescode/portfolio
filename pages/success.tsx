import type { NextPage } from 'next'
import Head from 'next/head'
import { Navbar, Footer } from '../components/Sections'
import styled from 'styled-components'
import Link from 'next/link'
import { HeroGradient } from '../components/Gradients'

const StyledMain = styled.main`
  min-height: calc(100vh - 68px - 63.59px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const StyledTitle = styled.h1`
  color: var(--color1);
  font-size: clamp(1.6rem, 15vw, 6rem);
`

const StyledSubTitle = styled.h2`
  color: var(--color2);
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
  background-color: transparent;
  border: 1px solid var(--borderColor);
  width: fit-content;
  color: var(--color1);
  margin-top: 2rem;
`

const StyledBox = styled.div`
  border: 1px solid var(--borderColor);
  padding: 2rem 4rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ThanksPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Thank You!</title>
      </Head>

      <Navbar />
      <HeroGradient color="#2553A066"/>

      <StyledMain>
        <StyledTitle>Thank you!</StyledTitle>

        <StyledSubTitle>Your message has been sent.</StyledSubTitle>

        <Link href="/" passHref>
          <HomeButton>Return To Home Page</HomeButton>
        </Link>       
      </StyledMain>
      
      <Footer />
    </>
  )
}

export default ThanksPage

