import React from 'react';
import {Routes, Route} from "react-router-dom";
import Cards from './pages/Cards';
import AddCard from './pages/AddCard';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Card from './components/card/Card';
import  { getUser } from "./components/user/UserSlice"


function App() {

  const dispatch = useDispatch();

useEffect(() => {
  dispatch(getUser());
}, [dispatch]);


const { user } = useSelector((state) => state.user);
// console.log(user);
  return (
    <div className="App">

     <Routes>
     <Route path="/cards" element={<Cards />}/>
  <Route path="/" element={<Cards />}/>
  <Route path="/addcard" element={<AddCard />} />
     </Routes>

     {user && < Card user ={user}/>}
    </div>
  );
}

export default App;
