import React from 'react'
import PropTypes from 'prop-types'
import styles from './musicPlayer.module.css'

const musicPlayer = ({url}) => (
	<div className={styles.item}>
	    <iframe 
	    	width="100%" 
	    	height="480" 
	    	scrolling="no" 
	    	frameborder="no" 
	    	allow="autoplay" 
	    	src={url}>
	    </iframe>          
    </div>
)

musicPlayer.propTypes = {
  url: PropTypes.string,
}

export default musicPlayer