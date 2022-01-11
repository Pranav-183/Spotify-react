import SongList from "./SongList";

let songItems
let songName = localStorage.getItem('Playing Song')
let songPlaybum = localStorage.getItem('Playing AP')
let songArtist = localStorage.getItem('Playing Artist')
let audioElement = new Audio(`/songs/${songName}.mp3`)
let albumSongs = []
SongList.forEach((song, i) => {
   if (song.playbum === songPlaybum) {
      albumSongs.push(song)
      song.id = parseInt(i)
   }
})
let audioIndex = albumSongs.filter(song => song.songName === songName)[0].id

// Local Storage Saving Functions
const savePlayingSong = (Song) => {
   localStorage.setItem('Playing Song', Song)
}
const savePlayingAP = (Album) => {
   localStorage.setItem('Playing AP', Album)
}
const savePlayingArtist = (Artist) => {
   localStorage.setItem('Playing Artist', Artist)
}

// Functions MAIN
function PlauseClick(e) {
   // Current Album Songs Array
   let currentAP = localStorage.getItem('Current Screen Album')
   let currentAlbumSongs = []
   SongList.forEach(song => {
      if (song.playbum === currentAP) {
         currentAlbumSongs.push(song)
      }
   })

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
      songItems = Array.from(document.getElementsByClassName('songItem'))
      // Update Song Values
      songName = songNumberOrIcon.parentElement.children[1].innerText
      songPlaybum = currentAlbumSongs.filter(song => song.songName === songName)[0].playbum
      songArtist = currentAlbumSongs.filter(song => song.songName === songName)[0].artistName
      audioIndex = currentAlbumSongs.filter(song => song.songName === songName)[0].id

      // Change Song Info Of Screen
      audioElement.src = `/songs/${songName}.mp3`
      songInfoImg.src = `/images/${songPlaybum}.jpg`
      document.title = `${songName} - ${songArtist}`
      songInfoSongName.innerText = songName
      mainPlause.innerText = 'pause_circle_filled'

      songItems.forEach(songItem => {
         let songNumber = songItem.children[0].children[0]
         let plauseIconSpan = songItem.children[0].children[1]
         if (songItem.children[1].innerText === songName) {
            songNumber.style.display = 'none'
            plauseIconSpan.style.display = 'block'
            plauseIconSpan.children[0].innerText = 'pause'
         } else {
            songNumber.style.display = null
            plauseIconSpan.style.display = null
            plauseIconSpan.children[0].innerText = 'play_arrow'
         }
      })

      audioElement.play()
   
      // Save To Local Storage
      savePlayingSong(songName)
      savePlayingAP(songPlaybum)
      savePlayingArtist(songArtist)
      
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
      document.title = `${songName} - ${songArtist}`
      audioElement.play()
   } else if (mainPlauseBtn.innerText === 'pause_circle_filled') {
      mainPlauseBtn.innerText = 'play_circle_filled'
      document.title = `Spotify - Web Player`
      audioElement.pause()
   }
}

function checkForMultiplePlause() {
   let songItems = document.querySelectorAll('.songItem')
   songItems.forEach(songItem => {
      if (songItem.children[1].innerText !== songName) {
         songItem.children[0].children[1].children[0].innerText = 'play_arrow'
         songItem.children[0].children[1].style.display = null
         songItem.children[0].children[0].style.display = null
      }
   })
}

function next() {
   // Selectors
   let songInfoSongName = document.querySelector('#songInfoSongName')
   let mainPlause  = document.getElementById('mainPlause')
   let songItems = document.querySelectorAll('.songItem')

   // Function
   if (audioIndex === parseInt(albumSongs.length - 1)) {
      audioIndex = 0
   } else {
      audioIndex ++
   }
   audioElement.pause()
   audioElement.src = `/songs/${albumSongs[audioIndex].songName}.mp3`
   // songItems[audioIndex].children[0].children[1].style.color = '#00b300'
   songItems[audioIndex].children[0].children[1].style.display = 'block'
   songItems[audioIndex].children[0].children[1].children[0].innerText = 'pause'
   songItems[audioIndex].children[0].children[0].style.display = 'none'
   songName = albumSongs[audioIndex].songName
   songInfoSongName.innerText = songName
   mainPlause.innerText = 'pause_circle_filled'
   audioElement.play()
   checkForMultiplePlause()
   
   // Save to Local Storage
   savePlayingSong(songName)
}

function previous() {
   // Selectors
   let songInfoSongName = document.getElementById('songInfoSongName')
   let mainPlause  = document.getElementById('mainPlause')

   // Function
   if (audioIndex === 0) {
      audioIndex = parseInt(albumSongs.length - 1)
   } else {
      audioIndex --
   }
   audioElement.pause()
   audioElement.src = `/songs/${albumSongs[audioIndex].songName}.mp3`
   songName = albumSongs[audioIndex].songName
   songInfoSongName.innerText = songName
   mainPlause.innerText = 'pause_circle_filled'
   audioElement.play()

   // Save to Local Storage
   savePlayingSong(songName)
}

document.addEventListener('keyup', (e) => {
   if (e.code === 'Space') {
      mainPlause()
   }
})
 
export default PlauseClick;
export {songName, songArtist, songPlaybum, audioElement, mainPlause, next, previous}