import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Error404 from "./components/Error404";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import CheckoutSuccess from './components/CheckoutSuccess';
import { loadUser } from './features/authSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/a8F9kL9zQ2xV7wT5mN3bJ6oP1rD0eG8uH2yI7Z5cX3vW9tK6sM4qL8nB7pQ2rD0eG8uH2yI7Z5cX3vW9tK6sM4qL8nB7pQ2rD0eG8uH2yI7Z5cX3vW9tK6sM4qL8nB7pQ2rD0eG8uH2yI7Z5cX3vW9tK6sM4qL8nB7" element={<CheckoutSuccess />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
        <Toaster position="bottom-left" reverseOrder={false} />
      </BrowserRouter>
    </>
  );
}

export default App;
