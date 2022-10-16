import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login"
 
function App() {
  return (
    < BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element= {<Login/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
