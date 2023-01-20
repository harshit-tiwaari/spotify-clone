console.log("Welcome to Spotify")
let songIndex = 0;
let audioElement = new Audio('1.mp3')
let masterplay = document.getElementById("masterplay")
let myProgressBar=document.getElementById("myProgressBar")
let gif = document.getElementById("gif");
let songItems=Array.from(document.getElementsByClassName("songItem"))
let songs = [
  { songName: "Ghode Pe Sawar Barishein", filePath: "1.mp3", CoverPath: "cover1.jpg" },
   { songName: " Barishein", filePath: "2.mp3", CoverPath: "cover2.jpg" },
    { songName: "Hum kis Gali Ja Rahein H", filePath: "3.mp3", CoverPath: "cover3.jpg" },
     { songName: "Bewafa", filePath: "4.mp3", CoverPath: "cover1.jpg" },
      {songName:"Amplifier",filePath:"5.mp3",CoverPath:"cover1.jpg"}

]
songItems.forEach((element,i) => {
  
  element.getElementsByTagName("img")[0].src = songs[i].CoverPath
  element.getElementsByClassName("songName")[0].innerText=songs[i].songName
})
//Handle play/pause click
masterplay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove("fa-circle-play")
    masterplay.classList.add("fa-circle-pause")
  gif.style.opacity=1
  }
  else {
    audioElement.pause();
    masterplay.classList.remove("fa-circle-pause")
    masterplay.classList.add("fa-circle-play")
    gif.style.opacity=0
  }
})

//listen to Events
audioElement.addEventListener("timeupdate", () =>{
  
  //update seekbar imp to remember
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
  
  myProgressBar.value=progress
})
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays = () => {
 
  Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
     element.classList.remove("fa-circle-pause")
    element.classList.add("fa-circle-play")
    
  }
  )
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=> {
  element.addEventListener("click",(e)=>{
    makeAllPlays();
   songIndex=parseInt(e.target.id)// why parseint?
    e.target.classList.remove("fa-circle-play")
    e.target.classList.add("fa-circle-pause")
    audioElement.src ='songs/${songIndex}.mp3'
    audioElement.currentTime = 0;//?
    audioElement.play()
    masterplay.classList.remove("fa-circle-play")
    masterplay.classList.add("fa-circle-pause")
  })
})

document.getElementById("next").addEventListener('click', () => {
  if (songIndex > 5) {
    songIndex = 1;
  }
  else {
    songIndex += 1;
  }
  audioElement.src = "songs/${songIndex}.mp3"
    audioElement.currentTime = 0;//?
    audioElement.play()
    masterplay.classList.remove("fa-circle-play")
    masterplay.classList.add("fa-circle-pause")
})
document.getElementById("previous").addEventListener('click', () => {
  if (songIndex <1 ) {
    songIndex = 5;
  }
  else {
    songIndex -= 1;
  }
  audioElement.src = "songs/${songIndex}.mp3"
    audioElement.currentTime = 0;//?
    audioElement.play()
    masterplay.classList.remove("fa-circle-play")
    masterplay.classList.add("fa-circle-pause")
})