import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import UserProfile from './Pages/UserProfile/UserProfile'
import User from './Pages/Users/User'

const AllRoutes = () => {
  return (
    
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/Auth' element={<Auth />}></Route>
      <Route exact path='/Questions' element={<Questions />}></Route>
      <Route exact path='/AskQuestion' element={<AskQuestion />}></Route>
      <Route exact path='/Questions/:id' element={<DisplayQuestion />}></Route>
      <Route exact path='/Tags' element={<Tags />}/>
      <Route exact path='/Users' element={<Users />}/>
      <Route exact path='/Users/:id' element={<UserProfile />}/>
    </Routes>
    
  )
}

export default AllRoutes