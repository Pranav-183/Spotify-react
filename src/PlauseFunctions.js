import { SongList } from './SongList'
import data from './data/albums.json'

let songName = localStorage.getItem('Playing Song')
let albumName = localStorage.getItem('Playing AP')
let songArtist = localStorage.getItem('Playing Artist')
let audioElement = new Audio(`/songs/${songName}.mp3`);
let songItems;
let reqdAlbumName = SongList.find(song => song.songName === songName).albumName
let reqdArtistName = SongList.find(song => song.songName === songName).artistName
let reqdAlbum = data['albums'].filter(album => album.Name === albumName)[0]['songs']
let reqdSongNames = []
reqdAlbum.map(reqdSong => (reqdSongNames.push(reqdSong.songName)))
let albumIndex = reqdSongNames.indexOf(songName)

SongList.forEach((song, i) => {
   song["id"] = parseInt(i+1)
   document.onDOMContentLoaded = () => {
      if (song.songName === songName) {
         albumName = song.albumName
         document.getElementById('songInfoImg').children[0].src = `http://localhost:3000/images/${song.albumName}.jpg`
         document.getElementById('songInfoSongArtist').innerText = song.artistName
      }
   }
});

const savePlayingSong = (Song) => {
   localStorage.setItem('Playing Song', Song)
}
const savePlayingAP = (Album) => {
   localStorage.setItem('Playing AP', Album)
}
const savePlayingArtist = (Artist) => {
   localStorage.setItem('Playing Artist', Artist)
}

function PlauseClick(e) {
   // Selectors
   let songNumberOrIcon = e.target.parentElement.parentElement;
   let songItem = songNumberOrIcon.parentElement
   let plauseIcon = songNumberOrIcon.children[1].children[0]
   let songNumber = songNumberOrIcon.children[0]
   let plauseIconSpan = songNumberOrIcon.children[1]
   let songInfoSongName = songItem.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[0].children[1].children[0]
   let songInfoImg = songInfoSongName.parentElement.parentElement.children[0].children[0]
   let mainPlause = songInfoSongName.parentElement.parentElement.parentElement.children[1].children[0].children[1]
   // Player
   if (plauseIcon.innerText === 'play_arrow') {
      songName = songNumberOrIcon.parentElement.children[1].innerText;
      songInfoSongName.innerText = songName
      SongList.forEach(song => {
         if (songName === song.songName) {
            songInfoImg.src = `http://localhost:3000/images/${song.albumName}.jpg`
            savePlayingSong(song.songName)
            savePlayingAP(song.albumName)
            savePlayingArtist(song.artistName)
            reqdAlbumName = song.albumName
            reqdAlbum = data['albums'].filter(album => album.Name === reqdAlbumName)[0]['songs']
         }
      })
      audioElement.src = `/songs/${songName}.mp3`;
      audioElement.play()
      mainPlause.innerText = 'pause_circle_filled'
      songNumber.style.display = 'none'
      plauseIconSpan.style.display = 'block'
      plauseIcon.innerText = 'pause'
      console.log(reqdAlbum)
      songNumberOrIcon.parentElement.onmouseover = () => {
         songNumberOrIcon.style.marginLeft = '60px'
         songNumberOrIcon.style.marginRight = '46px'
      }
      songNumberOrIcon.parentElement.onmouseleave = () => {
         songNumberOrIcon.style.marginLeft = '53px'
         songNumberOrIcon.style.marginRight = '38px'
      }
      songItems = Array.from(document.getElementsByClassName('songItem'))
   } else if (plauseIcon.innerText === 'pause') {
      songName = songNumberOrIcon.parentElement.children[1].innerText;
      audioElement.src = `/songs/${songName}.mp3`;
      audioElement.play()
      plauseIcon.innerText = 'play_arrow'
      setTimeout(() => {
         plauseIcon.innerText = 'pause'
      }, 100);
   }

   // Icon Stuff
   songItems.forEach(songItem => {
      if (songItem.children[1].innerText !== songName) {
         songItem.children[0].children[1].children[0].innerText = 'play_arrow'
         songItem.children[0].children[1].style.display = null
         songItem.children[0].children[0].style.display = null
         songItem.children[0].style.marginLeft = null
         songItem.children[0].style.marginRight = null
         songItem.onmouseover = () => {return}
         songItem.onmouseleave = () => {return}
      }
   })
}

function mainPlause() {
   let mainPlauseBtn = document.getElementById('mainPlause')
   if (mainPlauseBtn.innerText === 'play_circle_filled') {
      mainPlauseBtn.innerText = 'pause_circle_filled'
      audioElement.play()
   } else if (mainPlauseBtn.innerText === 'pause_circle_filled') {
      mainPlauseBtn.innerText = 'play_circle_filled'
      audioElement.pause()
   }
}

function next() {
   let songInfoSongName = document.getElementById('songInfoSongName')
   let mainPlause  = document.getElementById('mainPlause')
   if (albumIndex < parseInt(reqdSongNames.length-1)) {
      albumIndex++
   } else {
      albumIndex = 0
   }
   audioElement.pause()
   audioElement.src = `/songs/${reqdSongNames[albumIndex]}.mp3`
   audioElement.play()
   mainPlause.innerText = 'pause_circle_filled'
   songInfoSongName.innerText = reqdSongNames[albumIndex]
   songName = reqdSongNames[albumIndex]
   savePlayingSong(reqdSongNames[albumIndex])
   savePlayingAP(reqdAlbumName)
   savePlayingArtist(reqdArtistName)
}

function previous() {
   let songInfoSongName = document.getElementById('songInfoSongName')
   let mainPlause  = document.getElementById('mainPlause')
   if (albumIndex > 0) {
      albumIndex--
   } else {
      albumIndex = parseInt(reqdSongNames.length-1)
   }
   audioElement.pause()
   audioElement.src = `/songs/${reqdSongNames[albumIndex]}.mp3`
   audioElement.play()
   mainPlause.innerText = 'pause_circle_filled'
   songInfoSongName.innerText = reqdSongNames[albumIndex]
}

document.addEventListener('keyup', (e) => {
   if (e.code === 'Space') {
      mainPlause()
   }
})
 
export default PlauseClick;
export {songName, songArtist, albumName, audioElement, mainPlause, next, previous}