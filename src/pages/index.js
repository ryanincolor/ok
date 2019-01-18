import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Intro from '../components/hero'
import SEO from '../components/seo'
import Music from '../components/music/music' 
import Image from '../components/image';
import PressPhotos from '../components/pressPhotos';
import Footer from '../components/footer';
import Logo from "../images/logo.svg" 



const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Intro/>
      <Music/>
      <PressPhotos /> 
      <Footer />   


      
  </Layout>
)

export default IndexPage
