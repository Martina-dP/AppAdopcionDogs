import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Total from './components/homePage/total'
import SingUp from "./components/singUp/singUp"
import Login from "./components/Login/Login"
import RecoverPassword from "./components/forgotPassword/forgotPassword"
import NewPassword from "./components/newPassword/newPassword"
 
function App() {
  return (
    < BrowserRouter>
      <div>
        <Routes>
          <Route path="/homePage" element= {<Total/>} />
          <Route path="/singUp" element= {<SingUp/>} />
          <Route path="/singIn" element= {<Login/>} />
          <Route path="/forgotPassword" element= {<RecoverPassword/>} />
          <Route path="/newPassword" element= {<NewPassword/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
