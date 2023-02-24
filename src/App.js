import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home"
import Navigation from "./Components/Navigation";

function App() {


  return (
  <div>
      <Navigation />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
        </Routes>
  </div>

);
}

export default App;