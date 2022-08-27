import {Routes, Route} from 'react-router-dom'

import ProtectedRoute from "./components/shared/ProtectedRoute";
import NavigationBar from './components/NavigationBar/NavigationBar'
//pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Product from './pages/Product/Product'
import Cart from './pages/Cart/Cart'
import Profile from './pages/Profile'

//Hooks

import {useSelector } from "react-redux";
function App() {
const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/login"
          element={<Login/>}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute condition={(user)} redirectPath="/login">
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
