import React from 'react'
import ProgressBar from 'react-toolbox/lib/progress_bar'

export default class ProgressBar extends React.Component {
  render() {
    return (
      <ProgressBar mode='determinate' value={this.props.progress}/>
    )
  }
}
