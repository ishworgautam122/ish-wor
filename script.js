const aboutText = "Hello! I'm Ishwor Gautam, a passionate web developer who enjoys building simple, clean, and effective websites.";
let index = 0;

function typeWriter() {
  if (index < aboutText.length) {
    document.getElementById("about-text").textContent += aboutText.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

window.onload = typeWriter;

const aboutHeading = document.querySelector('#about h2');
const body = document.body;
const sections = document.querySelectorAll('section');
const nav = document.getElementById('navbar');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const profilePic = document.getElementById('profile-pic');

function setLightMode() {
  body.style.backgroundColor = 'white';
  body.style.color = 'black';
  sections.forEach(sec => {
    sec.style.backgroundColor = 'wheat';
    sec.style.color = 'black';
    sec.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
  });
  nav.style.backgroundColor = '#444';
  header.style.backgroundColor = '#333';
  footer.style.backgroundColor = '#333';
  profilePic.style.borderColor = '#444';
}
 
function setDarkMode() {
  body.style.backgroundColor = 'black';
  body.style.color = 'white';
  sections.forEach(sec => {
    sec.style.backgroundColor = '#222';
    sec.style.color = 'white';
    sec.style.boxShadow = '0 0 10px rgba(255,255,255,0.2)';
  });
  nav.style.backgroundColor = '#222';
  header.style.backgroundColor = '#111';
  footer.style.backgroundColor = '#111';
  profilePic.style.borderColor = '#555';
}

let darkMode = true;
aboutHeading.addEventListener('click', () => {
  darkMode ? setLightMode() : setDarkMode();
  darkMode = !darkMode;
});
