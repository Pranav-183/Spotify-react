import { useParams } from "react-router";
import useFetch from '../useFetch';
import Four from '../images/Four.jpg';
import MadeInTheAM from '../images/Made In The A.M.jpg';
import MidnightMemories from '../images/Midnight Memories.jpg';
import TakeMeHome from '../images/Take Me Home.jpg';
import UpAllNight from '../images/Up All Night.jpg';
import SongItem from '../albums/SongItem'

const Album = () => {
   const { name } = useParams()
   const {data: album, error, isPending} = useFetch('http://localhost:8000/albums/' + name)
   let nameWithNoWhiteSpaces = name.replace(/ /g, "")
   return ( 
      <>
         {isPending && <div>Loading....</div>}
         {error && <div>{error}</div>}
         {album && 
         <>
         <div className={`topRight ${nameWithNoWhiteSpaces}TopRight`}>
            {album.albumName === 'Four' && <img src={Four} width="40px" alt="Four" />}
            {album.albumName === 'Made In The A.M.' && <img src={MadeInTheAM} width="40px" alt="Made In The A.M." />}
            {album.albumName === 'Midnight Memories' && <img src={MidnightMemories} width="40px" alt="Midnight Memories" />}
            {album.albumName === 'Take Me Home' && <img src={TakeMeHome} width="40px" alt="Take Me Home" />}
            {album.albumName === 'Up All Night' && <img src={UpAllNight} width="40px" alt="Up All Night" />}
            <div className="topRightInfo">
               <h4 className="FirstLine">{album.type.toUpperCase()}</h4>
               <h1 className="SecondLine">{album.albumName}</h1>
               <span className="ThirdLine">
                  <h3 className="linkedArtist"><a href="https://open.spotify.com/artist/4AK6F7OLvEQ5QYCBNiQWHq" rel="noreferrer" target="_blank">{album.artistName}&nbsp;</a></h3><h5>· {album.numberOfSongs} songs · {album.totalDuration.toString().slice(0,2)} min {album.totalDuration.toString().slice(3,5)} sec</h5>
               </span>
            </div>
         </div>
         <div className="middleRight">
            
         </div>
         <div className={`bottomRight`}>
            <div className="songTitles">
               <div className="titleHash"><span>#</span></div>
               <div className="titleTitle"><span>TITLE</span></div>
               <div className="titleDuration"><span className="material-icons">schedule</span></div>
            </div>
            <hr />
            <div id="songItems">
               <SongItem songs={album.songs} />
            </div>
         </div>
         </>
         }
      </>
   )
}
 
export default Album;