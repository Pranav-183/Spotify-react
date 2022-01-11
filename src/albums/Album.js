import { useParams } from "react-router";
import useFetch from '../useFetch';
import SongItem from '../albums/SongItem';
import SongList from '../SongList'
import { useEffect } from "react";

const Album = () => {
   const { name } = useParams()
   const {data: album, error, isPending} = useFetch('http://localhost:8000/albums/' + name)

   const allSongs = SongList
   let albumSongs = []
   allSongs.forEach(song => {
      if (song.playbum === name) {
         albumSongs.push(song)
      }
   })
   albumSongs.forEach((song,i) => {
      song.id = parseInt(i)
   })
   
   let nameWithNoWhiteSpaces = name.replace(/ /g, "")
   useEffect(() => {
      localStorage.setItem('Current Screen Album', name)
      let songItems = document.querySelectorAll('.songItem')
      songItems.forEach(songItem => {
         let songNumber = songItem.children[0].children[0]
         let songName = songItem.children[1]
         let plauseIconSpan = songItem.children[0].children[1]
         let songNumberOrIcon = songItem.children[0]
         if (songName.innerText === localStorage.getItem('Playing Song')) {
            songNumber.style.display = 'none'
            plauseIconSpan.style.display = 'block'
            plauseIconSpan.children[0].innerText = 'pause'
            songNumberOrIcon.style.marginLeft = '55px'
            songNumberOrIcon.style.marginRight = '35px'
         } else {
            songNumber.style.display = null
            plauseIconSpan.style.display = null
            plauseIconSpan.children[0].innerText = 'play_arrow'
            songNumberOrIcon.style.marginLeft = null
            songNumberOrIcon.style.marginRight = null
         }
      })
   }, [name])
   return ( 
      <>
         {isPending && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>Loading....</div>}
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
               <SongItem albumSongs={albumSongs} />
            </div>
         </div>
         </>
         }
      </>
   )
}
 
export default Album