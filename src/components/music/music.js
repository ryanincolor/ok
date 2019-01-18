
import PropTypes from 'prop-types'
import React from 'react'
import styles from './music.module.css'
import MusicPlayer from '../musicPlayer' 
import Title from '../sectionHeader' 


const Music = () => (
	<div className={styles.music}>
       <Title title="Music" />
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            padding: '.5rem'
          }} 
        >
          <MusicPlayer url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/294719977&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"/>
          <MusicPlayer url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/294719977&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"/>
          <MusicPlayer url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/294719977&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"/>
          <MusicPlayer url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/294719977&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"/>
          <MusicPlayer url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/294719977&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"/>
          <MusicPlayer url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/294719977&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"/>
          <MusicPlayer url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/294719977&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"/>
          <MusicPlayer url="https://www.youtube.com/embed/EW7RbULN_Ws"/>

       </div>
  </div>
)


export default Music