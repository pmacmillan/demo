import calculateWinner from '../utils/calculateWinner'

export default function clickSquare (i) {
  return function (dispatch, getState) {
    const { current, history } = getState()
    const { squares, xIsNext } = history[current]

    const winner = calculateWinner(squares)

    if (winner || squares[i]) {
      return
    }

    const newSquares = squares.slice()

    newSquares[i] = xIsNext ? 'X' : 'O'

    let newHistory = history.slice(0, current + 1)

    newHistory = newHistory.concat([{
      xIsNext: !xIsNext,
      squares: newSquares
    }])

    dispatch({
      type: 'setState',
      payload: {
        current: newHistory.length - 1,
        history: newHistory
      }
    })
  }
}
