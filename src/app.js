import React, { useEffect } from 'react'
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
import Book from './js/pages/book'
import Navbar from "/js/components/organisms/navbar"
// import Sidebar from './js/components/Sidebar/Sidebar';
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
  const appState = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(async () => {
    // send action to the store
    dispatch({ type: 'APP_INIT' })

    let dataResult = await api.get('user/me');

    console.log("dataResult -- user/me on going", dataResult, "-----", dataResult.data)

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

