import React from 'react'
import { Grid, Row } from 'react-flexbox-grid'
import styles from './MiniPlayer.scss'
import CurrentSong from '../../components/CurrentSong/CurrentSong'

export default class MiniPlayer extends React.Component {
  render () {
    return (<CurrentSong />)
  }
}
