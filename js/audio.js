gsap.registerPlugin(ScrollTrigger);

const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const progressBar = document.getElementById('progress-bar');
const seekContainer = document.getElementById('seek-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const block__comments = document.querySelector('.block__comments');

let isPlaying = false;
let currentTrackIndex = 0;
let num = 0;

const tracks = [
  'audio/true jackson (mp3cut.net).mp3',
  'audio/radio (mp3cut.net).m4a',
  'audio/ackson (mp3cut.net).mp3'
];

function loadTrack(index) {
  currentTrackIndex = index;
  audio.src = tracks[currentTrackIndex];
  audio.load();
  resetProgress();
  if (isPlaying) {
    audio.play();
  }
}

function resetProgress() {
  progressBar.style.width = '0%';
}

function updateCommentsOpacity() {
    if (mediaQuery.matches) {
        const activeIndex = num % 3;
        [...block__comments.children].forEach((child, index) => {
        const opacity = index === activeIndex ? 1 : 0.25;
        const scale = index === activeIndex ? 1 : 0.9;
        gsap.to(child, { opacity, scale, duration: 0.4 });
        });
    }
    else{
        const activeIndex = num % 3;
        [...block__comments.children].forEach((child, index) => {
        const opacity = index === activeIndex ? 1 : 0;
        const scale = index === activeIndex ? 1 : 0.9;
        gsap.to(child, { opacity, scale, duration: 0.4 });
        });
    }
  }

playPauseBtn.addEventListener('click', () => {
  if (!isPlaying) {
    audio.play();
    gsap.to(".play-pause", {scale: 1.05, duration: .1});
    gsap.to(".play-pause", {scale: 1, duration: .1,delay:.1});
    gsap.to(".play-pause__img-tr-pause", { opacity: 1, scale: 1, duration: 0.1, delay: 0.1 });
    // gsap.to(".play-pause__img-tr", { scale: 0.9, duration: 0.1 });
    gsap.to(".play-pause__img-tr", { opacity: 0, duration: 0.1, delay: 0.05 });
    updateCommentsOpacity(); 
  } else {
    audio.pause();
    gsap.to(".play-pause", {scale: 1.05, duration: .1});
    gsap.to(".play-pause", {scale: 1, duration: .1,delay:.1});
    gsap.to(".play-pause__img-tr-pause", { opacity: 0, duration: 0.1, delay: 0.05 });
    // gsap.to(".play-pause__img-tr-pause", { scale: 0.9, duration: 0.1 });
    gsap.to(".play-pause__img-tr", { opacity: 1, scale: 1, duration: 0.1, delay: 0.1 });
  }
  isPlaying = !isPlaying;
});

audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
  }
});
prevBtn.addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  num = (num - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrackIndex);
  gsap.to(".ar-pr", { scale: 0.9, duration: 0.1 });
  gsap.to(".ar-pr", { scale: 1, duration: 0.1, delay: 0.1 });
  updateCommentsOpacity(); 
});
nextBtn.addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  num = (num + 1) % tracks.length;
  loadTrack(currentTrackIndex);
  gsap.fromTo(".ar-nt", { rotate: 180 }, { scale: 0.9, rotate: 180, duration: 0.1 });
  gsap.to(".ar-nt", { scale: 1, duration: 0.1, rotate: 180, delay: 0.1 });
  updateCommentsOpacity();
});
audio.addEventListener('ended', () => {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  num = (num + 1) % tracks.length;
  loadTrack(currentTrackIndex);
  gsap.fromTo(".ar-nt", { rotate: 180 }, { scale: 0.9, rotate: 180, duration: 0.1 });
  gsap.to(".ar-nt", { scale: 1, duration: 0.1, rotate: 180, delay: 0.1 });
  updateCommentsOpacity(); 
});
