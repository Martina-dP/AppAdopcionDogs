import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login"
import Total from './components/homePage/total';
 
function App() {
  return (
    < BrowserRouter>
      <div>
        <Routes>
          <Route path="/homePage" element= {<Total/>} />
          <Route path="/singIn" element= {<Login/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
