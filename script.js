// DARK MODE TOGGLE
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('light');
});

// GSAP SCROLL ANIMATIONS
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out"
  });
});

// TYPING EFFECT
const words = ["Aspiring Developer", "Web Enthusiast", "Tech Explorer"];
let i = 0;
let currentWord = "";
let isDeleting = false;
let typingElement = document.querySelector(".typing");

function type() {
  let word = words[i];
  if (isDeleting) {
    currentWord = word.substring(0, currentWord.length - 1);
  } else {
    currentWord = word.substring(0, currentWord.length + 1);
  }
  typingElement.textContent = currentWord;

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && currentWord === word) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && currentWord === "") {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, speed);
}
type();