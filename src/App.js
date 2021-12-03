import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import BottomBar from "./BottomBar";
import Header from "./Header";
import Home from "./home/Home";
import Search from "./search/Search";
import Library from "./library/Library";
import Albums from "./albums/Albums"
import Album from "./albums/Album";

const App = () => {
  return (
    <Router>
      <div className="all">
        <div className="sides">
          <Navbar />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="library" element={<Library />} />
          </Routes>
          <div className="rightSide">
            <Header />
            <Routes>
              <Route path="albums" element={<Albums />}>
                <Route path=":id" element={<Album />} />
              </Route>
            </Routes>
          </div>
        </div>
        <BottomBar />
      </div>
    </Router>
  )
}
 
export default App;