import React, { Component } from 'react'
import { connect } from 'react-redux'

import calculateWinner from '../utils/calculateWinner'
import Board from '../components/Board'
import MoveList from '../components/MoveList'

import clickSquare from '../actions/clickSquare'
import jumpTo from '../actions/jumpTo'

class Game extends Component {
  constructor (props) {
    super(props)

    this.state = props
  }

  jumpTo (n) {
    this.props.jumpTo(n)
  }

  render() {
    const { history, current } = this.props
    const { xIsNext, squares } = history[current]
    const winner = calculateWinner(squares)

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={ squares }
            onClick={ (i) => this.props.clickSquare(i) }/>
        </div>
        <div className="game-info">
          <div>{
            winner ? (winner + ' is the winner')
              : (xIsNext ? 'X is next' : 'O is next')
          }</div>

          <MoveList
            history={ history }
            onClick={ (n) => this.jumpTo(n) }
            />
        </div>
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  return state
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    clickSquare: function (i) {
      dispatch(clickSquare(i))
    },
    jumpTo: function (n) {
      dispatch(jumpTo(n))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
