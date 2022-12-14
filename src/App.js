import React from "react";
import { Routes, Route } from "react-router-dom";
import Cards from "./pages/Cards";
import AddCard from "./pages/AddCard";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./components/user/UserSlice";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/cards" element={<Cards />} />
        <Route path="/" element={<Cards />} />
        <Route path="/addcard" element={<AddCard />} />
      </Routes>
    </div>
  );
}

export default App;
