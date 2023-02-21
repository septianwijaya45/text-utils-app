import React, { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if(mode === 'light'){ 
      setMode('dark') 
      document.body.style.backgroundColor = 'black'
      showAlert('Dark Mode has been change!', 'success')
    }else {
      setMode('light') 
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode has been change!', 'success')
    }
  } 
  
  return (
    <>
      {/* <Navbar title="Text Utils" aboutText="About Text" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} /> 
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
