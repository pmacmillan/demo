import React, { Component } from 'react'

class Square extends Component {
  render() {
    const { value, onClick } = this.props

    return (
      <button
        type="button"
        onClick={ onClick }
        className="square">
        { value}
      </button>
    );
  }
}

export default Square
