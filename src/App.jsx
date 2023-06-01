import { Fragment, useState } from 'react'

import './App.css'
import { Box, Heading } from '@chakra-ui/react'
import FullScreenSection from './Components/Layouts/FullScreenContent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from '../Components/Pages/Home'
// import Bookings from '../Components/Pages';
import Home from './Components/Pages/Home'
import Bookings from './Components/Pages/Bookings';
import Navbar from './Components/Layouts/Navbar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/bookings' element={<Bookings></Bookings>}></Route>
      </Routes>
    </Fragment>
  )
}

export default App
