// CINEMATIC INTRO JAVASCRIPT
document.addEventListener('DOMContentLoaded', () => {
  // SINGLE CAMERA ZOOM TIMELINE
  const introTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#intro-spacer",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2,
      onLeave: () => {
        gsap.to("#intro-viewport", {
          opacity: 0, duration: 1.2, display: 'none',
          onComplete: () => {
            document.getElementById('intro-spacer').style.display = 'none';
            document.getElementById('siteHeader').classList.add('visible');
            document.getElementById('siteMain').classList.add('visible');
            window.scrollTo(0, 0);
          }
        });
      }
    }
  });

  const zoomEase = "none";

  // Initial states
  gsap.set(["#introPlanet1", "#introPlanet2", "#introPlanet3"], { opacity: 0, scale: 0.1 });
  gsap.set(".bg-element", { opacity: 0, scale: 0.05 });
  gsap.set("#introNebula", { opacity: 0, scale: 0.25 });
  gsap.set("#entering-text", { opacity: 0, scale: 0.8 });

  // Phase 1: Reveal & Title Fade Out
  introTL.to(["#introText", "#scrollHint"], { opacity: 0, y: -40, duration: 1, ease: "power1.out" }, 0);
  introTL.to("#introPlanet3", { opacity: 0.8, scale: 0.22, duration: 1 }, 0.2);
  introTL.to("#introPlanet2", { opacity: 0.6, scale: 0.14, duration: 1 }, 0.4);
  introTL.to("#introPlanet1", { opacity: 0.4, scale: 0.08, duration: 1 }, 0.6);
  introTL.to(".bg-element", { opacity: 0.35, duration: 1.5 }, 0.5);
  introTL.to("#introNebula", { opacity: 1, duration: 1.5 }, 0.5);

  // MASTER ZOOM
  // Ultra-Far Background (EXTENSION)
  introTL.to(".bg-element", {
    scale: 0.38,
    x: (i) => (i % 2 === 0 ? -150 : 150),
    y: (i) => (i % 3 === 0 ? -100 : 100),
    opacity: 0.1,
    duration: 10,
    ease: zoomEase
  }, 1);
  introTL.to("#introPlanet3", {
    scale: 3.5,
    x: -innerWidth * 1.2,
    y: innerHeight * 0.8,
    opacity: 0,
    duration: 10,
    ease: zoomEase
  }, 1);

  // Planet 2 (MID)
  introTL.to("#introPlanet2", {
    scale: 2.2,
    x: innerWidth * 0.8,
    y: -innerHeight * 0.6,
    opacity: 0,
    duration: 10,
    ease: zoomEase
  }, 1);

  // Planet 1 (FAR)
  introTL.to("#introPlanet1", {
    scale: 1.2,
    x: -innerWidth * 0.4,
    y: -innerHeight * 0.3,
    opacity: 0.2,
    duration: 10,
    ease: zoomEase
  }, 1);

  // Entering... Text (Appears near the end of zoom)
  introTL.to("#entering-text", {
    opacity: 1,
    scale: 1.05,
    duration: 0.6,
    ease: "power1.inOut"
  }, 7.8);

  introTL.to("#entering-text", {
    opacity: 0,
    scale: 1.1,
    duration: 0.4,
    ease: "power2.in"
  }, 8.8);

  // Nebula (DESTINATION)
  introTL.to("#introNebula", { scale: 3.5, opacity: 1, duration: 8, ease: "power1.inOut" }, 1);
  introTL.to("#introNebula", { scale: 150, duration: 0.8, ease: "power2.in" }, 9.2);

  // Final background morph
  introTL.to("#intro-viewport", { backgroundColor: "#05070c", duration: 0.5 }, 9.5);
});
