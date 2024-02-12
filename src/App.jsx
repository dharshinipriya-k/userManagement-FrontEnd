import React from 'react'
import Dashboard from './components/Dashboard'
import AddUser from './components/AddUser'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import TopBar from './components/TopBar'
import EditUser from './components/EditUser'
export const API_URL = 'https://user-crud-r0yx.onrender.com'

function App() {

  return <>
    <BrowserRouter>
    <TopBar/>
      <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/add-user' element={<AddUser/>}/>
          <Route path='/edit-user/:id' element={<EditUser/>}/>
          <Route path='*' element={<Navigate to='/dashboard'/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App