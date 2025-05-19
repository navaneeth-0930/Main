// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Fade out the black overlay
gsap.from(".hero h1, .hero p", {
  opacity: 1,
  y: 40,
  duration: 1.2,
  stagger: 0.3,
  ease: "power2.out",
  delay: 0.5
});


// 🔄 Scroll-triggered fade in/out for hero section
gsap.to(".hero h1, .hero p", {
  scrollTrigger: {
    trigger: ".about-work",
    start: "topbottm",
    end: "top 60%",
    scrub: 1.2,
  },
  opacity: 1,
  ease: "power1.out"
});

gsap.to(".hero h1, .hero p", {
  scrollTrigger: {
    trigger: ".about-work",
    start: "top 60%",
    end: "top bottom",
    scrub: 1.2,
  },
  opacity: 0,
  ease: "power1.out"
});

// 🔧 About + Work section reveal
gsap.from(".about-work", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about-work",
    start: "top 85%",
    toggleActions: "play none none reverse"
  }
});

// 🖱 Hover preview interaction
const previewBtn = document.querySelector(".hover-preview-btn");
const previewImg = document.querySelector(".hover-preview-img");

previewBtn.addEventListener("mousemove", (e) => {
  previewImg.style.left = `${e.offsetX}px`;
  previewImg.style.top = `${e.offsetY - 150}px`;
});

function showTooltip() {
  document.getElementById("tooltip").style.display = "block";
}
function hideTooltip() {
  document.getElementById("tooltip").style.display = "none";
}
