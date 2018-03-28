import React from 'react';
import PropTypes from 'prop-types'

export default class App extends React.Component {
  static propType = {
    index: PropTypes.number.isRequired
  }

  render() {
    const ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    return (
      <div className="box" id={this.props.index} style={{backgroundColor: ColorCode}} >
      </div>
    )
  }
}