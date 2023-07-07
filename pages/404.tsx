import Head from 'next/head'
import styled from 'styled-components'
import { Footer, Navbar } from '../components/Sections'

const StyledMain = styled.main`
  height: calc(100vh - 60px - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 1.25rem;
`
const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>

      <Navbar />

      <StyledMain>
        <h1>404 - Page Not Found</h1>
      </StyledMain>

      <Footer />
    </>
  )
}

export default Custom404
