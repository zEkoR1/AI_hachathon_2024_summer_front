import { useState } from 'react'
import './App.css'
import MyAppBar from './components/MyAppBar'
import UserWishes from './components/UsersWishes'
function App() {

  return (
    <>
      <div>
      <MyAppBar/>

        <p>
          Let the work begin
        </p>
        <UserWishes />
      </div>

    </>
  )
}

export default App