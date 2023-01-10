import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Total from './components/homePage/total';
import Home from './components/home/home';
import SingUp from "./components/singUp/singUp";
import RecoverPassword from "./components/forgotPassword/forgotPassword";
import NewPassword from "./components/newPassword/newPassword";
import DetailsUser from './components/user/details/details';
import PerfilUser from './components/user/View-for-other-users/perfil-User';
import Login from './components/login/login';
import PreFormAnimals from './components/animal/preForm/preForm';
import NewDog from './components/animal/form/formDog';
import NewCat from './components/animal/form/formCat';
import DetailAnimal from './components/animal/details/detail'
 
function App() {
  return (
    < BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element= {<Total/>} />
          <Route path="/home" element= {<Home/>} />
          <Route path="/singUp" element= {<SingUp/>} />
          <Route path="/login" element= {<Login/>} />
          <Route path="/forgotPassword" element= {<RecoverPassword/>} />
          <Route path="/newPassword" element= {<NewPassword/>} />
          <Route path="/myAcount/:id" element= {<DetailsUser/>} />
          <Route path="/perfil-user/:_id" element= {<PerfilUser/>} />
          <Route path="/prePost" element= {<PreFormAnimals/>} />
          <Route path="/newDog" element= {<NewDog/>} />
          <Route path="/newCat" element= {<NewCat/>} />
          <Route path="/animal/:_id" element= {<DetailAnimal/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
