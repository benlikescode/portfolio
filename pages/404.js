import styled from 'styled-components';
import Head from 'next/head'
import Link from 'next/link'
import { Navbar, Footer } from '../components/Sections'

const StyledMain = styled.main`
  min-height: calc(100vh - 68px - 63.59px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const StyledTitle = styled.h1`
  color: var(--color1);
  font-size: clamp(5rem, 20vw, 10rem);
`

const StyledSubTitle = styled.h2`
  color: var(--color2);
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
  background-color: transparent;
  border: 1px solid var(--borderColor);
  width: fit-content;
  color: var(--color1);
  margin-top: 3rem;
`

export default function Custom404() {
  return (
    <>
    <Head>
      <title>Page Not Found</title>
    </Head>

    <Navbar />

    <StyledMain>
      <StyledTitle>404</StyledTitle>
      <StyledSubTitle>Page Not Found</StyledSubTitle>
      <Link href="/">
        <HomeButton>Return To Home Page</HomeButton>
      </Link>
    </StyledMain>
     
    <Footer />
    </>  
  )
}