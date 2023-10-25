import React from 'react'
import './App.css';
import Protected from './Pages/Protected';
import Home from "./Pages/Home"
import Navbar from './Pages/navbar';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import TodoList from './Pages/TodoList';
import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
   <> 
    <Navbar/>
    <Routes>
      <Route path='/' element={<Protected Component = {Home}/>} />
      <Route path='/about' element={<Protected Component = {About}/>} />
      <Route path='/services' element={<Protected Component = {Services}/>} />
      <Route path='/contact' element={<Protected Component = {Contact}/>} />
      <Route path='/todo-list' element={<Protected Component = {TodoList}/>} />
      <Route path='/login' element={<Login />} />
    </Routes>
   </>
  )
}

export default App