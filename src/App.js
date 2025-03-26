//import logo from "./logo.svg";
import React,{useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Options from "./components/Option";
import Userpage from "./components/User-page";
import Location from "./components/Location";
import Dispose from "./components/Dispose";
import Pin from "./components/Pin";
import Showlist from "./components/Showlist";
import Industry from "./components/Industry";
import Ratecard from "./components/Ratecard";
import Submitratecard from "./components/Submitratecard";
import Notification from "./components/Notification";
import Industrypage from "./components/Industrypage";
import Req from "./components/Req";
import Ratecardindustry from "./components/Ratecardindustry";
import Optionindustry from "./components/Optionindustry";
import Carbon from './components/Carbon';
import Graph from './components/graph'

import  { BrowserRouter, Routes, Route } from "react-router-dom";
let name = "mahi";

function App() {
  const [modes, setmodes] = useState('light')
  const togglemode=()=>{
    if (modes==='light') {
      setmodes('dark');
      document.body.style.backgroundColor='grey'
    }
    else{
      setmodes('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Options />}></Route>
        </Routes>

          <Routes>
            <Route path="/user" element={<Userpage />}></Route>
          </Routes>

          <Routes>
            <Route path="/submit" element={<Location />}></Route>
          </Routes>

          <Routes>
            <Route path="/submit-location" element={<Dispose />}></Route>
          </Routes>

          <Routes>
            <Route path="/dispose" element={<Pin />}></Route>
          </Routes>

          <Routes>
            <Route path="/show-list" element={<Showlist />}></Route>
          </Routes>

          <Routes>
            <Route path="/industry" element={<Industry />}></Route>
          </Routes>

          <Routes>
            <Route path="/ratecard" element={<Ratecard />}></Route>
          </Routes>

          <Routes>
            <Route path="/submitratecard" element={<Submitratecard />}></Route>
          </Routes>

          <Routes>
            <Route path="/notification" element={<Notification />}></Route>
          </Routes>

          <Routes>
            <Route path="/industrialist" element={<Industrypage />}></Route>
          </Routes>

          <Routes>
            <Route path="/req" element={<Req mode={modes} />}></Route>
          </Routes>

          <Routes>
            <Route path="/choose" element={<Optionindustry />}></Route>
          </Routes>

          <Routes>
            <Route path="/submitreq" element={<Ratecardindustry />}></Route>
          </Routes>

          <Routes>
            <Route path="/carbonfootprint" element={<Carbon/>}></Route>
          </Routes>

          <Routes>
            <Route path="/graph" element={<Graph/>}></Route>
          </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
{
  
}
