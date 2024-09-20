import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Profile from './components/Profile/Profile'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import PostDetail from './components/Posts/PostDetail'

function App() {

  return (
    <>
      <Provider store={store}>
        <Router>
          
          <TheHeader/>

          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/post/:id" element={<PostDetail/>}/>
          </Routes>
        </Router>
      </Provider>
    </>
  )
}

export default App
