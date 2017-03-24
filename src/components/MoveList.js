import React from 'react'

function MoveList ({ history, onClick }) {
  return (
    <ol>
      {
        history.map(function (state, i) {
          return (
            <li key={ i }>
              <a href="#" onClick={ () => onClick(i) }>
                Move #{ i }
              </a>
            </li>
          )
        })
      }
    </ol>
  )
}

export default MoveList

