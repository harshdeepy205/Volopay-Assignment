import "./App.css";
import InfoCard from "./Components/Card/InfoCard";
import Home from "./Components/Home/Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
