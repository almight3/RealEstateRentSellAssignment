import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RentProperty from "./pages/RentProperty"
import FavouriteProperty from "./pages/FavouriteProperty"

import NavBar from "./component/Navbar/NavBar"
function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path="/rent" element={<RentProperty />} />
        <Route path="/favourite" element={<FavouriteProperty />} />
    </Routes>  
    </BrowserRouter>
  )
}

export default App
