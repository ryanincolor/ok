import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './hero.module.css'


const Intro = ({image}) => (
	<div className={styles.hero}>  
	  	<div className={styles.container}>
		    <h1 className={styles.name}>Orphan King</h1>
		    <p className={styles.bio}>KIDS VOL I : MAY 15</p>


	  	</div>
	  	<div className={styles.image} 
	  		style={{
	            backgroundImage: "url("+image+")"
          }}
	  	></div> 
	</div>	  


)


export default Intro
