import spotifyLogo from "./Spotify Logo.png"
import 'material-icons/iconfont/material-icons.css'
import { Link } from "react-router-dom"

const Navbar = () => {
   return (
      <nav className="navbar">
         <div className="spotify">
            <img src={spotifyLogo} alt="Spotify Logo" className="spotify-logo" />
            <span className="spotifyText">Spotify</span>
         </div>
         <ul className="homeAbout">
            <li className="homeAboutElement">
               <Link to="/"><span className="material-icons">home</span><span>Home</span></Link>
            </li>
            <li className="homeAboutElement">
               <Link to="/search"><span className="material-icons">search</span><span>Search</span></Link>
            </li>
            <li className="homeAboutElement">
               <Link to="/library"><span className="material-icons">library_music</span><span>Library</span></Link>
            </li>
         </ul>
         <div className="albums">
            <ul className="albumList">
               <li className="album"><Link to="/albums">ALBUMS</Link></li>
               <li className="album"><Link to="/albums/Four">Four</Link></li>
               <li className="album"><Link to="/albums/Made%20In%20The%20A.M.">Made In The A.M.</Link></li>
               <li className="album"><Link to="/albums/Midnight%20Memories">Midnight Memories</Link></li>
               <li className="album"><Link to="/albums/Take%20Me%20Home">Take Me Home</Link></li>
               <li className="album"><Link to="/albums/Up%20All%20Night">Up All Night</Link></li>
            </ul>
         </div>
         <div className="playlists">
            <ul className="playlistList">
               <li className="playlist"><Link to="./playlists/||Songs||">||Songs||</Link></li>
            </ul>
         </div>
      </nav>
   );
}
 
export default Navbar;