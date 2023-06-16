import './App.css';
import TextForm from './Components/TextForm'
import Navbar from './Components/Navbar';
import { useState } from 'react';
import Alert from './Components/Alert';

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled.", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode has been disabled.", "danger");
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="MyApp" aboutText="About Us" mode={mode} toggleMode={toggleMode}/> 
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert = {showAlert} heading="Enter the text to analyse"/>
        {/* <Routes>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/' element={<TextForm showAlert = {showAlert} heading="Enter the text to analyse"/>}/>
        </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
