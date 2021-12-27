import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import BottomBar from "./BottomBar";
import Header from "./Header";
import Home from "./home/Home";
import Search from "./search/Search";
import Library from "./library/Library";
import Album from "./albums/Album";
import Albums from "./albums/Albums";
import Login from "./accounts/Login";
import Signup from "./accounts/Signup";

const App = () => {
  document.addEventListener('DOMContentLoaded', () => {
    let signedIn = localStorage.getItem('SignedInStatus')
    signedIn = false
    localStorage.setItem('SignedInStatus', signedIn)
  })

  return (
    <Router>
      <div className="all">
        <div className="sides">
          <Navbar />
          <div className="rightSide">
          <Header />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="library" element={<Library />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/albums/:name" element={<Album />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </div>
        <BottomBar />
      </div>
    </Router>
  )
}
 
export default App;