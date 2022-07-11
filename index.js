const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const song = $("#song");
const playBtn = $(".player-inner");
const nextBtn = $(".play-forward");
const prevBtn = $(".play-back");
const durationTime = $(".duration");
const remainingTime = $(".remaining");
const rangeBar = $(".range");
const musicName = $(".music-name");
const musicThumbnail = $(".music-thumb");
const musicImage = $(".music-thumb img");
const playRepeat = $(".play-repeat");

let isPlaying = true;
let indexSong = 0;
let isRepeat = true;
let timer;
let repeatCount = 0;
const musics =  [
    {
        id: 1,
        title: "anh danh roi nguoi yeu nay",
        file:"./assets/music/AnhSaoVaBauTroi-TRI-7085073.mp3",
        image:
          "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80",
    },
    {
        id: 2,
        title: "anh sao va bau troi",
        file:"./assets/music/AnhDanhRoiNguoiYeuNayLiveCover-AndiezPay-7011166.mp3",
        image:
          "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80",
    },
    {
        id: 3,
        title: "bao nhieu mot mo bình yen",
        file:"./assets/music/BaoTienMotMoBinhYen-14CasperBon-6897329.mp3",
        image:
          "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80",
    },
    {
        id: 4,
        title: "buoc qua mua co don",
        file:"./assets/music/BuocQuaMuaCoDon-Vu-6879419.mp3",
        image:
          "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80",
    }
]
song.setAttribute("src",`${musics[indexSong].file}`)

nextBtn.addEventListener("click", function () {
    changeSong(1);
  }); 
  prevBtn.addEventListener("click", function () {
    changeSong(-1);
  });

  function changeSong(dir) {
    if(dir === 1) {
        indexSong++
        if(indexSong >= musics.length) {
            indexSong = 0;
        }
        isPlaying = true
    }
    else if(dir === -1){
        indexSong--;
        if(indexSong < musics.length) {
            indexSong = musics.length - 1;
        }
        isPlaying = true;
    }
    song.setAttribute("src",`${musics[indexSong].file}`);
    playPause();
  }

playBtn.addEventListener('click', playPause)
function playPause() {
    if(isPlaying) {
        song.play()
        musicThumbnail.classList.add('is-playing')
        playBtn.innerHTML = `<ion-icon name="pause-circle"></ion-icon>`
    // timer = setInterval(displayTimer, 500);
        isPlaying = false
    } else { 
        song.pause() 
        musicThumbnail.classList.remove('is-playing')
        playBtn.innerHTML = `<ion-icon name="play"></ion-icon>`
        // clearInterval(timer);
        isPlaying = true
    }
}

playRepeat.addEventListener('click', songRepeat)
function songRepeat() {
  if(isRepeat) {
  
    
    repeatCount = indexSong
    this.style.color = 'red'
    song.setAttribute("src",`${musics[repeatCount].file}`); 
    isRepeat = false

  }
  else {
    this.style.color = 'black'
    song.setAttribute("src",`${musics[indexSong].file}`);  
    isRepeat = true
  }
  // console.log(isRepeat)
}

