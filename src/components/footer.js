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
  		<a href="https://www.instagram.com/orphanking_" target="_blank">instagram</a>
  		<a href="https://www.facebook.com/orphankng" target="_blank">facebook</a>
      <a href="https://twitter.com/orphanking_" target="_blank">twitter</a>
  		<a href="https://soundcloud.com/orphanking" target="_blank">soundcloud</a>
  		<a href="https://open.spotify.com/artist/7bFR4AY6BX3kFpFz6614xr?si=4pELlLShReKmPPZqGtDKZg" target="_blank">spotify </a>
  		<a href="https://www.youtube.com/channel/UCxHg7zKbM5_e_jAy_tib6rA" target="_blank">youtube</a>
  		<a href="https://itunes.apple.com/se/artist/orphan-king/1330385502?l=en" target="_blank">apple music</a>
  		<a href="https://www.instagram.com/orphanking_/">presskit</a>
  		<a href="https://www.dropbox.com/s/hkrtp4qd0lj6by2/Orphan%20King%20Press%20Photos.zip?dl=1" download>photos</a>
  	</div>
  </div>

)

export default Footer
