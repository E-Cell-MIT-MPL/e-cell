import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage';
import MeetTheTeam from './pages/Meettheteam';
import AboutUs from './pages/AboutUs';
import Initiatives from "./pages/Initiatives";
import Mes from './pages/mes';
import BlogPage from "./pages/BlogPage";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Mes/>}></Route>
          <Route path="/MeetTheTeam" element={<MeetTheTeam />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/Initiatives" element={<Initiatives />}></Route>
          <Route path="/Home" element={<HomePage />}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
          <Route path="/ThankYou" element={<ThankYou />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
