import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
export default function App(props) {

  const appState = useSelector(state => state)
  const dispatch = useDispatch()
  console.log(appState)
  console.log('toto')


  //when component is initialized
  // when there is an update
  useEffect(() => {
    // send action to the store
    dispatch({ type: 'APP_INIT' })

    // console.log('useEffect on App is ttriggered')
    setTimeout(() => {
      dispatch({ type: 'APP_READY' })
    }, 2000)

  }, [])

  if (appState.loading) return <div>Loading...</div>

  return (
    <h1>
      Hello World
    </h1>
  )
}

