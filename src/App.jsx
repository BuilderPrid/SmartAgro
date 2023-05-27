import { useState } from 'react'

import './App.css'
import { Box,Heading } from '@chakra-ui/react'
import FullScreenSection from './Components/FullScreenContent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import Bookings from './Components/Bookings';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/bookings' element={<Bookings></Bookings>}></Route>
        
    </Routes>
    </>
  )
}

export default App