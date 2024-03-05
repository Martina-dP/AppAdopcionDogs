import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Total from './components/homePage/total';
import Home from './components/home/home';
import DonationsPay from './components/payments/donations/DonationsPay';
import SingUp from "./components/singUp/singUp";
import RecoverPassword from "./components/forgotPassword/forgotPassword";
import NewPassword from "./components/newPassword/newPassword";
import DetailsUser from './components/user/details/details';
import Login from './components/login/Login';
import PreFormAnimals from './components/animal/preForm/preForm';
import NewDog from './components/animal/form/formDog';
import NewCat from './components/animal/form/formCat';
import DetailAnimal from './components/animal/details/detail'
 
function App() {
  return (
    < BrowserRouter>
        <Routes>
          <Route path="/" element= {<Total/>} />
          <Route path="/home" element= {<Home/>} />
          <Route path="/ayuda" element= {<DonationsPay/>} />
          <Route path="/singUp" element= {<SingUp/>} />
          <Route path="/login" element= {<Login/>} />
          <Route path="/forgotPassword" element= {<RecoverPassword/>} />
          <Route path="/newPassword" element= {<NewPassword/>} />
          <Route path="/myAcount/:_id" element= {<DetailsUser/>} />
          <Route path="/prePost" element= {<PreFormAnimals/>} />
          <Route path="/newDog" element= {<NewDog/>} />
          <Route path="/newCat" element= {<NewCat/>} />
          <Route path="/animal/:_id" element= {<DetailAnimal/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
