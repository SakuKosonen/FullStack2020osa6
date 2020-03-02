

const notificationReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':

            return action.data



        default:
            return state
    }
}

/*dispatch(notificate(`you voted '${anecdote.content}'`))
     setTimeout(() => {
         dispatch(notificate(null))
     }, 5000)*/

export const notificate = (text, time) => {
    const superTime = time * 1000

    return async dispatch => {

        dispatch({
            type: 'SET_NOTIFICATION',
            data: text
        })
        setTimeout(() => {

            dispatch({
                type: 'SET_NOTIFICATION',
                data: null
            })
        }, superTime)
    }
}



export default notificationReducer
