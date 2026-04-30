import React from 'react'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import HotelOperation from './Features/HotelOperation'
import RoomManagement from './Features/RoomManagement'
import HouseKeeping from './Features/HouseKeeping'
import FacilityManagement from './Features/FacilityManagement'
import InventoryControl from './Features/InventoryControl'
import HotelHRMS from './Features/HotelHRMS'
import AboutPage from './pages/AboutPage'

const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HotelOperation" element={<HotelOperation />} />
        <Route path="/RoomManagement" element={<RoomManagement />} />
        <Route path="/HouseKeeping" element={<HouseKeeping />} />
        <Route path="/FacilityManagement" element={<FacilityManagement />} />
        <Route path="/InventoryControl" element={<InventoryControl />} />
        <Route path="/HotelHRMS" element={<HotelHRMS />} />
        <Route path="/about" element={<AboutPage />} />


      </Routes>


    </div>
  )
}

export default App