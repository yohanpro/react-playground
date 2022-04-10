import styled from '@emotion/styled'
import Head from 'next/head'
import { ReactChild } from 'react'

type DefaultPageLayoutProps = {
  children: React.ReactNode
}
const DefaultLayout = ({ children }: DefaultPageLayoutProps) => {
  return (
    <Layout>
      <Head>
        <title>앨범 </title>
      </Head>
      <main>{children}</main>
    </Layout>
  )
}

const Layout = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 1rem;
`
export default DefaultLayout
