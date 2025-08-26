console.log("Welcome to Spotify");

// Initialize the Variables
let naatIndex = 0;
let audioElement = new Audio('naats/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masternaatName = document.getElementById('masternaatName');
let naatItems = Array.from(document.getElementsByClassName('naatItem'));

let naats = [
    {naatName: "bhar-do-jholi-meri-ya-muhammad", filePath: "naats/1.mp3", coverPath: "covers/1.jpeg"},
    {naatName: "hum-madinay-se-allah-kyun-aa-gaye", filePath: "naats/2.mp3", coverPath: "covers/1.jpeg"},
    {naatName: "ik-khawab-sunawan", filePath: "naats/3.mp3", coverPath: "covers/1.jpeg"},
    {naatName: "jab-waqt-naza-aye-last-naat", filePath: "naats/4.mp3", coverPath: "covers/1.jpeg"},
    {naatName: "madine-ka-safar-hai", filePath: "naats/5.mp3", coverPath: "covers/1.jpeg"},
    {naatName: "mera-dil-badal-de", filePath: "naats/2.mp3", coverPath: "covers/1.jpeg"},
    {naatName: "muhammad-ka-roza", filePath: "naats/2.mp3", coverPath: "covers/1.jpeg"},
    {naatName: "noori-mehfil-pay-chaadar", filePath: "naats/2.mp3", coverPath: "covers/1.jpeg"},
    {naatName: "qasida-burda-shareef", filePath: "naats/2.mp3", coverPath: "covers/1.jpeg"},
    {naatName: "zahe-muqaddar-huzoor-e-haq-se", filePath: "naats/4.mp3", coverPath: "covers/1.jpeg"},
]

naatItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = naats[i].coverPath; 
    element.getElementsByClassName("naatName")[0].innerText = naats[i].naatName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('naatItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('naatItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        naatIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `naats/${naatIndex+1}.mp3`;
        masternaatName.innerText = naats[naatIndex].naatName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(naatIndex>=9){
        naatIndex = 0
    }
    else{
        naatIndex += 1;
    }
    audioElement.src = `naats/${naatIndex+1}.mp3`;
    masternaatName.innerText = naats[naatIndex].naatName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(naatIndex<=0){
        naatIndex = 0
    }
    else{
        naatIndex -= 1;
    }
    audioElement.src = `naats/${naatIndex+1}.mp3`;
    masternaatName.innerText = naats[naatIndex].naatName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})