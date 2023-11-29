import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './common/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const [chooseMode, setchooseMode] = useState('light')
  const [togglecondition,setTogglecondition]=useState('off')

  const toggleMode = () => {
    console.log("moddddddddddddddd",mode)
    // if (mode == 'light') {
    //   setMode('dark')
    //   document.body.style.backgroundColor = "#2d649a"
    //   showAlert('unable to dark mode','success')
    // } else {
    //   setMode('light')
    //   document.body.style.backgroundColor = "white"
    //   showAlert('unable to light mode','success')
    // }
    
    if (chooseMode === 'light'||togglecondition==='on') {
          setMode('light')
          document.body.style.backgroundColor = "white"
          showAlert('unable to white mode','success')
        }
    if (chooseMode === 'dark') {
        setMode('dark')
        document.body.style.backgroundColor = "#2d649a"
        showAlert('unable to dark mode','success')
      }
      if (chooseMode === 'green') {
        setMode('green')
        document.body.style.backgroundColor = "green"
        showAlert('unable to green mode','success')
      }
      if (chooseMode === 'yellow') {
        setMode('yellow')
        document.body.style.backgroundColor = "yellow"
        showAlert('unable to yellow mode','success')
      }
    // else {
    // //   setMode('light')
    // //   document.body.style.backgroundColor = "white"
    // //   showAlert('unable to light mode','success')
    // // }
    if(togglecondition==='off'){
      setTogglecondition('on')
    }
    else{
      setTogglecondition('off')
      setMode('light')
      setchooseMode('light')
      document.body.style.backgroundColor = "white"
      showAlert('unable to white mode','success')
    }

  }

  const showAlert = (message,type) => {
    console.log("jdsshdfjskhfskj",message,type)
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },3000)
  }

  const selectMode = (t) =>{
      console.log("selectModeselectModeselectMode",t)
      setchooseMode(t)
      // setTogglecondition('off')
      if(togglecondition==='on'){
        setTogglecondition('off')
        console.log("suuhkhdskjhkjsh",mode)
        setMode('light')
        document.body.style.backgroundColor = "white"
      }
  }

  return (
    <>
      <Router>
          <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} chooseMode={chooseMode} selectMode={selectMode} togglecondition={togglecondition}/>
          <Alert alert={alert}/>
          <div className="container my-3">
            <Routes>
              <Route path='/' exact element={<TextForm heading="Enter to text analyze" mode={mode} showAlert={showAlert} />} />
              <Route path='/about' exact element={<About />} />
            </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
