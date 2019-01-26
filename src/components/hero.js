import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './hero.module.css'
import HeroImage from '../images/hero.png'

const Intro = () => (
	<div className={styles.hero}>  
	  	<div className={styles.container}>
		    <h1 className={styles.name}><span>Orphan </span><span>King</span></h1>
		    <p className={styles.bio}>"Sadness and heartbreak are both in the music and in his voice. His songs are cinematic and haunting, and will touch you in your soul. The future of futuresoul."<br /><br />-indie pop ups</p>


	  	</div>
	  	<div className={styles.image}></div> 
	</div>	  


)

export default Intro