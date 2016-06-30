import React from 'react'
import styles from './CurrentSong.scss'
import SongProgressBar from '../SongProgressBar/SongProgressBar'
// import { Grid, Row, Col } from 'react-flexbox-grid'

export default class CurrentSong extends React.Component {
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.albumArtContainer}>
          <img className={styles.albumArt} src='http://placehold.it/80x80'/>
        </div>

        <div className={styles.songInfoContainer}>
          <SongProgressBar/>
          <div>Song Name</div>
          <div>Artist - Album</div>
        </div>
      </div>
    )
  }
}