import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import LoginForm from "./pages/Auth/LoginForm"
import SignUpForm from "./pages/Auth/SignUpForm"
import Home from "./pages/Dashboard/Home"
import CreatePoll from './pages/Dashboard/CreatePoll'
import MyPolls from './pages/Dashboard/MyPolls'
import VotedPolls from './pages/Dashboard/VotedPolls'
import Bookmarks from './pages/Dashboard/Bookmarks'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element = {<Root/>} />
          <Route path="/login" exact element = {<LoginForm/>} />
          <Route path="/signUp" exact element = {<SignUpForm/>} />
          <Route path="/dashboard" exact element = {<Home/>} />
          <Route path="/create-poll" exact element = {<CreatePoll/>} />
          <Route path="/my-polls" exact element = {<MyPolls/>} />
          <Route path="/voted-polls" exact element = {<VotedPolls/>} />
          <Route path="/bookmarks" exact element = {<Bookmarks/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App

const Root = () => {
  //Check if token exists in localStorage

  const isAuthenticated = !!localStorage.getItem("token")

  // Redirected to dashboard if authenticated, otherwise to login

  return isAuthenticated ?(<Navigate to="/dashboard"/>) : (<Navigate to="/login"/>)
}