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
	    	src={"https://w.soundcloud.com/player/?url=https%3A//api." + url + "&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=falseide&show_reposts=false&sharing=false&buying=false&show_teaser=false&visual=true"}>
	    </iframe>          
    </div>
)

musicPlayer.propTypes = {
  url: PropTypes.string,
}

export default musicPlayer