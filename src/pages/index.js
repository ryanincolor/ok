import React from 'react'
import { Link } from 'gatsby'
import Hero from '../components/hero'
import Footer from '../components/footer';
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../press/1.jpg'
import styles from '../components/footer.module.css'



const IndexPage = () => (
  <Layout>
    <SEO title="Orphan King" keywords={[`music`, `emotional`, `orphan king`]} />
    <Hero image={Image} />
    <div className={styles.footer}>
	    <div>
		  	<div className={styles.bookings}>
				<h3>Bookings & Management</h3>
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
				<Link to="/presskit">press</Link>

			</div>
		</div>
	</div>


  </Layout>
)

export default IndexPage
