import React, { useEffect } from 'react'
import { Redirect } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import api from './utils/api';
import './app.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

//routes 
import Start from './js/pages/start'
import Home from './js/pages/home'
import UserProfile from './js/pages/userProfile';
import Authentification from './js/pages/authentification'
import Book from './js/components/organisms/books'
import Navbar from "/js/components/organisms/navbar"
// import PrivateRoute from './js/components/privateRoute'
import Loader from './js/components/atoms/loader'

export const routes = {
  base: "/",
  home: "/home",
  auth: "/authentification",
  book: "/book",
  profile: "/profile"
};

export default function App(props) {
  const appState = useSelector(state => state.app)
  const dispatch = useDispatch()

  useEffect(async () => {
    dispatch({ type: 'APP_INIT' })
    dispatch({ type: 'LOAD' })

    try {
      const result = await api.get('user/me');
      dispatch({ type: 'SIGN_IN', payload: result.data.user })

    } catch (err) {
      // dispatch({ type: 'LOGOUT' })
      console.log("erreur init user/me", err)
    }
    setTimeout(() => {
      dispatch({ type: 'APP_READY' })
    }, 1000)
  }, [])

  if (appState.loading) return <Loader />
  console.log("app -- state", appState)

  return (
    <>
      <Router>
        < Navbar />
        <Switch>
          <Route path={routes.auth} component={Authentification} exact />
          <Route path={routes.base} component={Start} exact />
          <Route path={routes.home} component={Home} exact />
          <Route path={routes.book} component={Book} exact />
          <Route path={routes.profile} component={UserProfile} exact />
        </Switch>
      </Router>
    </>
  )
}
