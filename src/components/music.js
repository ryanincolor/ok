
import PropTypes from 'prop-types'
import React from 'react'
import styles from './music.module.css'
import MusicPlayer from './musicPlayer' 
import Title from './sectionheader' 


const Music = () => (
	<div className={styles.music}>
       <Title title="Music"/>
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
          }} 
        >
          <MusicPlayer url="soundcloud.com/tracks/603385224"/>
          <MusicPlayer url="soundcloud.com/tracks/294719977"/>
          <MusicPlayer url="soundcloud.com/tracks/556875138%3Fsecret_token%3Ds-Ox1h8"/>
          <MusicPlayer url="soundcloud.com/tracks/297514738"/>
          <MusicPlayer url="soundcloud.com/tracks/378293723"/>
          <MusicPlayer url="soundcloud.com/tracks/557506665%3Fsecret_token%3Ds-0KqwT"/>
          <MusicPlayer url="soundcloud.com/tracks/378293741"/>
          <MusicPlayer url="soundcloud.com/tracks/306353116"/>
       </div>
  </div>
)


export default Music
