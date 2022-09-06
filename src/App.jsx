import {Routes, Route} from 'react-router-dom'
import { useState } from "react";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import NavigationBar from './components/NavigationBar/NavigationBar'
//pages
import Home from './pages/Home/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Product from './pages/Product/Product'
import Cart from './pages/Cart/Cart'
import Profile from './pages/Profile'

//Hooks

import {useSelector } from "react-redux";
function App() {
const { user } = useSelector((state) => state.auth);
const { list } = useSelector((state) => state.market);
const [listAdd, setListAdd] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const handleSearch = (e) => {
  setSearchTerm(e.target.value);
};
const filterSearch = list.filter((market) =>
  market.title.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    <div>
      <NavigationBar handleSearch={handleSearch}/>
      <Routes>
        <Route index element={<Home filterSearch = {filterSearch}/>} />
        <Route
          path="/login"
          element={<Login/>}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:productId" element={<Product setListAdd = {setListAdd}/>} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute condition={(user)} redirectPath="/login">
              <Cart listAdd = {listAdd}/>
            </ProtectedRoute>
          }
        />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
