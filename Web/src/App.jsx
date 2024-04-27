import { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Components/Login/SignIn.jsx";
import SignUp from "./Components/Login/SignUp.jsx";
import { Home } from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/profile" element={<h1>Profile</h1>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
