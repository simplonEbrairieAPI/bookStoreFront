import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
//routes 
import Start from './js/pages/start'
import Home from './js/pages/home'
import UserProfile from './js/pages/userProfile';
import Authentification from './js/pages/authentification'
import Book from './js/pages/book'
import Navbar from "/js/components/navbar"
// import Sidebar from './js/components/Sidebar/Sidebar';
// import PrivateRoute from './js/components/privateRoute'

import Loader from './js/components/loader'
import './app.css'

import api from "./utils/api"

export const routes = {
  base: "/",
  home: "/home",
  auth: "/authentification",
  book: "/book",
  profile: "/profile"

};


export default function App(props) {

  const appState = useSelector(state => state)
  const dispatch = useDispatch()
  // console.log('before')
  // console.log(appState)
  // console.log('toto')
  //when component is initialized
  // when there is an update
  useEffect(async () => {
    // send action to the store
    dispatch({ type: 'APP_INIT' })

    console.log('useEffect on App is triggered')
    setTimeout(() => {
      dispatch({ type: 'APP_READY' })
    }, 2000)

    // try {
    //   const result = await api.get('users/me');
    //   dispatch({ type: 'APP_READY' });
    //   console.log(result);
    // } catch (err) {
    //   console.log('errrroororororororor', err)
    //   // console.log(result)
    //   dispatch({ type: 'APP_READY' })

    // }



  }, [])

  if (appState.loading) return <Loader />

  return (

    <>
      <Router>
        < Navbar />
        {/* < Sidebar /> */}

        <Switch>
          <Route exact path={routes.auth} component={Authentification} />

          {/* http://localhost1234 */}
          {/* <Layout> */}
          <Route path={routes.base} component={Start} exact />
          <Route path={routes.home} component={Home} exact />
          <Route path={routes.book} component={Book} exact />
          <Route path={routes.profile} component={UserProfile} exact />

          {/* </Layout> */}

        </Switch>
      </Router>
    </>
  )
}

