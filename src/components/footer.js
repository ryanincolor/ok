import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './footer.module.css'

const Footer = () => (
  <div className={styles.footer} >
  	<div className={styles.bookings}>
  		<h3>Bookings</h3>
  		<a href="mailto:hello@madebyhuman.se">hello@madebyhuman.se</a>
  	</div>
  	<div className={styles.links}>
  		<a href="https://www.instagram.com/orphanking_/">instagram</a>
  		<a href="https://www.instagram.com/orphanking_/">facebook</a>
  		<a href="https://www.instagram.com/orphanking_/">soundcloud</a>
  		<a href="https://www.instagram.com/orphanking_/">spotify</a>
  		<a href="https://www.instagram.com/orphanking_/">youtube</a>
  		<a href="https://www.instagram.com/orphanking_/">apple music</a>
  		<a href="https://www.instagram.com/orphanking_/">presskit</a>
  		<a href="https://www.instagram.com/orphanking_/">photos</a>
  	</div>
  </div>

)

export default Footer
