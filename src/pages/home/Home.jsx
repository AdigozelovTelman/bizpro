import React from 'react'
import Layout from '../../components/common/layout/Layout'
import About from './components/about/About'
import Hello from './components/hello/Hello'
import Meet from './components/meet/Meet'

const Home = () => {
  return (
    <Layout>
      <Hello/>
      <About/>
      <Meet/>

    </Layout>
  )
}

export default Home