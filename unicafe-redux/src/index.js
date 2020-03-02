import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
  const ok = () => {
    store.dispatch({
      type: 'OK'
    })
  }
  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }
  const zero = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  const allVotes = store.getState().good + store.getState().ok + store.getState().bad
  const average = (store.getState().good * 1 + store.getState().bad * -1) / allVotes
  const positive = (store.getState().good / allVotes) * 100
 
  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={good}>hyvä</button>
      <button onClick={ok}>neutraali</button>
      <button onClick={bad}>huono</button>
      <button onClick={zero}>nollaa tilastot</button>
      <h2>Statistics</h2>
      {allVotes !== 0 ?
      <>
        <div>hyvä {store.getState().good}</div>
        <div>neutraali {store.getState().ok}</div>
        <div>huono {store.getState().bad}</div>
        <div>keskiarvo {average}</div>
        <div>positiiviset {positive}%</div>
      </> :
      <div>no feedback given </div>
      }     
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)