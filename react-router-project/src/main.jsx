import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,Route,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Root from './components/root/Root.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Github from './components/github/Github.jsx'
import Users from './components/users/Users.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element={<Root/>}>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "about" element = {<About/>}/>
      <Route path = "contact" element = {<Contact/>}/>
      <Route path  = "github/users/:userId" element = {<Users/>}/>
      <Route 
      //loader={getData}
      path='github' 
      element={<Github />}
      />

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
