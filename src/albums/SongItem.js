import React, { Component } from 'react';
import playingGif from '../images/playing.gif'
import FavoriteClick from './FavoriteClick';
import PlauseClick from './PlauseClick';

class SongItem extends Component {
   render() {
      return (
         <div>
            {this.props.songs.map((song) => (
               <div className="songItem" key={song.id}>
                  <div className="songNumberOrIcon">
                     <span className="songNumber">{song.id}</span>
                     <span className="plauseIcon"><i className="material-icons" onClick={PlauseClick}>play_arrow</i></span>
                     <span className="playingGif"><img src={playingGif} width="40px" alt="playingGif"></img></span>
                  </div>
                  <div className="songName">{song.songName}</div>
                  <div className="favoriteIcon"><i className="material-icons" onClick={FavoriteClick}>favorite_border</i></div>
                  <div className="songDuration">{song.duration}</div>
               </div>
            ))}
         </div>
      );
   }
}

export default SongItem