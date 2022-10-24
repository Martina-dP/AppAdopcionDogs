import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Total from './components/homePage/total';
import Home from './components/home/home';
import SingUp from "./components/singUp/singUp";
import Login from "./components/Login/Login";
import RecoverPassword from "./components/forgotPassword/forgotPassword";
import NewPassword from "./components/newPassword/newPassword";
import NewAnimal from './components/animal/form/form';
import DetailsUser from './components/user/details/details';
import PerfilUser from './components/user/View-for-other-users/perfil-User';
 
function App() {
  return (
    < BrowserRouter>
      <div>
        <Routes>
          <Route path="/homePage" element= {<Total/>} />
          <Route path="/home" element= {<Home/>} />
          <Route path="/singUp" element= {<SingUp/>} />
          <Route path="/singIn" element= {<Login/>} />
          <Route path="/forgotPassword" element= {<RecoverPassword/>} />
          <Route path="/newPassword" element= {<NewPassword/>} />
          <Route path="/newAnimal" element= {<NewAnimal/>} />
          <Route path="/myAcount/:id" element= {<DetailsUser/>} />
          <Route path="/perfil-user/:id" element= {<PerfilUser/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
