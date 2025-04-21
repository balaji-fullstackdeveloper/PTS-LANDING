// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get all cards
  const cards = document.querySelectorAll(".cards-container > div");

  // Set initial state for cards (off-screen to the right)
  gsap.set(cards, {
    x: "100%",
    opacity: 0,
  });

  // Create a ScrollTrigger animation
  cards.forEach((card, index) => {
    gsap.to(card, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
      delay: index * 0.2, // Stagger the animations
    });
  });
});
