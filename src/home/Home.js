import { Link } from "react-router-dom";

const Home = () => {
   return (
      <div className="homepage">
         <h1 style={{marginBottom: "20px"}}>ALBUMS</h1>
         <h3>One Direction</h3>
         <ul className="hpAlbumList">
            <Link to="/albums/Four"><li className="hpAlbum hpComponent"><h3>Four</h3></li></Link>
            <Link to="/albums/Made In The AM"><li className="hpAlbum hpComponent"><h3>Made In The AM</h3></li></Link>
            <Link to="/albums/Midnight Memories"><li className="hpAlbum hpComponent"><h3>Midnight Memories</h3></li></Link>
            <Link to="/albums/Take Me Home"><li className="hpAlbum hpComponent"><h3>Take Me Home</h3></li></Link>
            <Link to="/albums/Up All Night"><li className="hpAlbum hpComponent"><h3>Up All Night</h3></li></Link>
         </ul>
      </div>
   );
}
 
export default Home;