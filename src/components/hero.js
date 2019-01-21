import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './hero.module.css'
import HeroImage from '../images/hero.png'

const Intro = () => (
	<div className={styles.hero}>  
	  	<div className={styles.container}>
		    <h1 className={styles.name}><span>Orphan </span><span>King</span></h1>
		    <p className={styles.bio}>
		    Stockholm based producer attempts to enforce imperfection using dystopian, often 
		    purposefully out-of-sync textural harmonies and lazy, heavily processed rhythms.
		    </p>
	  	</div>
	  	<div className={styles.image}></div> 
	</div>	  


)

export default Intro