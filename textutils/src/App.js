import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TextBox from './components/TextBox.js';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  
  const [alert, setAlert] = useState("Welcome To Textutils ");
  let type = "primary";

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type :type
    });
    setTimeout(() => {
      setAlert(" ");
    }, 2000);
  }

  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#510158";
      // setAlert('Set to Dark Mode !');
      showAlert("Set to Dark Mode ", "danger");
      document.title = 'TextUtils-Dark';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "#fdf5ff";
      setAlert("Set to Light Mode !");
      showAlert("Set to Light Mode", "success");
      document.title = 'TextUtils-Light';
    }
  }
 

  return (
    <>
    <Router>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossOrigin="anonymous"
      />

          <Navbar title="TextUtils" tab1="Home" tab2="About Us"  tab1Link="/home" tab2Link="/about" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <Routes> 
              <Route path="/about" element={<About mode={mode}/>} ></Route>
              <Route path='/home' element={<TextBox heading="Enter your Text" mode={mode} showAlert={showAlert} />} ></Route>
              <Route path='/' element={<TextBox heading="Enter your Text" mode={mode} showAlert={showAlert} />} ></Route>

          </Routes>
    </Router>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossOrigin="anonymous"
      ></script>

    </>
  )
}
    

export default App;

