import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Total from './components/homePage/total';
import SingUp from "./components/singUp/singUp";
import Login from "./components/Login/Login"
 
function App() {
  return (
    < BrowserRouter>
      <div>
        <Routes>
          <Route path="/homePage" element= {<Total/>} />
          <Route path="/singUp" element= {<SingUp/>} />
          <Route path="/singIn" element= {<Login/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
