import { useParams } from "react-router";
import useFetch from '../useFetch';
import SongItem from '../albums/SongItem';
import { useEffect } from "react";
const Album = () => {
   const { name } = useParams()
   const {data: album, error, isPending} = useFetch('http://localhost:8000/albums/' + name)
   let nameWithNoWhiteSpaces = name.replace(/ /g, "")
   useEffect(() => {
      localStorage.setItem('Current Screen Album', name)
   }, [name])
   return ( 
      <>
         {isPending && <div>Loading....</div>}
         {error && <div>{error}</div>}
         {album && 
         <>
         <div className={`topRight ${nameWithNoWhiteSpaces}TopRight`}>
            <img src={`/images/${album.Name}.jpg`} alt={`${album.Name} img`} />
            <div className="topRightInfo">
               <h4 className="FirstLine">{album.type.toUpperCase()}</h4>
               <h1 className="SecondLine">{album.Name}</h1>
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