import { Link } from "react-router-dom";

const Albums = () => {
   return (
      <div className="rightSide">
         <Link to="/albums/Four"><li className="album">Four</li></Link>
         <Link to="/albums/Made In The "><li className="album">Made In The AM</li></Link>
         <Link to="/albums/Midnight Memories"><li className="album">Midnight Memories</li></Link>
         <Link to="/albums/Take Me Home"><li className="album">Take Me Home</li></Link>
         <Link to="/albums/Up All Night"><li className="album">Up All Night</li></Link>
      </div>
   );
}
 
export default Albums;