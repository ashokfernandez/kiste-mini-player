import React from 'react'
import ProgressBar from 'react-toolbox/lib/progress_bar'

export default class SongProgressBar extends React.Component {
  render () {
    return (
      <ProgressBar mode='determinate' value={50} />
    )
  }
}
