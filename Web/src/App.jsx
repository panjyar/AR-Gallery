import { useState } from "react";
import "./App.css";
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import SignIn from "./Components/Login/SignIn.jsx";
import SignUp from "./Components/Login/SignUp.jsx";
import Home from "./Components/MainPage/Home.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
