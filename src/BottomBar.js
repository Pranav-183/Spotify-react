import { albumName, songArtist, songName, mainPlause, next, previous } from "./PlauseFunctions";

const BottomBar = () => {
      return (
      <div id="bottomBar">
         <div id="songInfo">
            <span id="songInfoImg">
               <img src={`/images/${albumName}.jpg`} alt="songInfoImg" />
            </span>
            <span id="songInfoText">
               <span id="songInfoSongName">{songName}</span>
               <span id="songInfoSongArtist" onClick={() => window.location.href = 'https://open.spotify.com/artist/4AK6F7OLvEQ5QYCBNiQWHq'}>{songArtist}</span>
            </span>
         </div>
         <div id="controls">
            <div id="icons">
               <div id="iconsLeft">
                  <i className="material-icons" id="shuffle">shuffle</i>
                  <i className="material-icons" id="previous" onClick={previous}>skip_previous</i>
               </div>
               <i className="material-icons" id="mainPlause" onClick={mainPlause}>play_circle_filled</i>
               <div id="iconsRight">
                  <i className="material-icons" id="next" onClick={next}>skip_next</i>
                  <i className="material-icons" id="repeat">repeat</i>
               </div>
            </div>
            <div id="seekbar">
               <input type="range" name="seekbar" id="seekbar" min={0} max={100} defaultValue={0} />
            </div>
         </div>
         <div id="extras">
            <i className="material-icons" id="queue">queue_music</i>
            <i className="material-icons" id="volume">volume_up</i>
            <input type="range" name="volumebar" id="volumebar" min={0} max={100} defaultValue={100} />
         </div>
      </div>
   )
}
 
export default BottomBar;