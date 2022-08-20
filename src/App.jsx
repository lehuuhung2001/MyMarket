import {Routes, Route} from 'react-router-dom'

import ProtectedRoute from './components/shared/ProtectedRoute'
import NavigationBar from './components/NavigationBar/NavigationBar'
//pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Profile from './pages/Profile'

import { useSelector } from "react-redux";
function App() {


  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route
          path="/cart"
          element={
            
              <Cart />
           
          }
        />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
