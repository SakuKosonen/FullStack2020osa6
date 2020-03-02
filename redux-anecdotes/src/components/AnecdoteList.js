import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { vote } from './../reducers/anecdoteReducer'
import { notificate } from './../reducers/notificationReducer'
const AnecdoteList = (props) => {

   
    const anecdotes = useSelector(state => state.anecdotes.sort((a,b) => b.votes - a.votes))
    const dispatch = useDispatch()

    const handleVote = (anecdote) => {
        dispatch(vote(anecdote))
        dispatch(notificate(`you voted '${anecdote.content}'`, 5))
    }

    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => handleVote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList