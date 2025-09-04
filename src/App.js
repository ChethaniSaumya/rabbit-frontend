import { Routes, Route, BrowserRouter } from "react-router-dom";

import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <ul id="bg-animation">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;