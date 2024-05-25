import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Buttons from './Components/Buttons';
import Add from './Pages/Add';
import Dashboard from './Pages/Dashboard';
import Edit from './Pages/Edit';

const App = () => {
  //State to manage id for editing purpose
  const [id,setId] = useState(0);
  return (
    <div>
      <BrowserRouter>      
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Buttons />
            <Routes>
              <Route path="/" element={<Dashboard setId={setId}/>} />
              <Route path="/add" element={<Add />} />
              <Route path="/edit/:id" element={<Edit id={id}/>} />
            </Routes>
          </div>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
};

export default App;