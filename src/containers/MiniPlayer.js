import React, { Component } from 'react'
import CurrentSong from '../components/CurrentSong/CurrentSong'
import { Grid, Row } from 'react-flexbox-grid'
import styles from './MiniPlayer.css'

export default class MiniPlayer extends Component {
  render() {
    return (
      <Grid className={ styles.container }>
        <Row>
          <CurrentSong />
        </Row>
      </Grid>
    )
  }
}
