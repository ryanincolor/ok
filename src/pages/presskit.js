import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import SEO from '../components/seo'
import Music from '../components/music' 
import Image from '../components/image';
import PressPhotos from '../components/pressPhotos';
import Bio from '../components/bio';
import Footer from '../components/footer';
import Logo from "../images/logo.svg" 
import HeroImage from '../images/hero.png'


const SecondPage = () => (
  <Layout>
    <SEO title="Press" />
    	<Hero image={HeroImage} />
     	<Music/>
     	<PressPhotos /> 
     	<Bio />  
     	<Footer />   
  </Layout>
)

export default SecondPage
