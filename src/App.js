import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import RentProperty from "./pages/RentProperty"
import FavouriteProperty from "./pages/FavouriteProperty"
import ContextProvider from './context/ContextProvider';
import NavBar from "./component/Navbar/NavBar"
function App() {
  return (
    <BrowserRouter>
    <ContextProvider>
    <NavBar />
    <Routes>
        <Route path="/"  element={<Navigate to="/rent" />} />
        <Route path="/rent" element={<RentProperty />} />
        <Route path="/favourite" element={<FavouriteProperty />} />
    </Routes>
    </ContextProvider>  
    </BrowserRouter>
  )
}

export default App
