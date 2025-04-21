document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".cards-container");
  const toggle = document.getElementById("card-toggle");
  const cards = document.querySelectorAll(".cards-container > div > div");
  const cardWidth = cards[0].offsetWidth;
  const gap = 16; // 1rem gap between cards

  // Handle toggle switch
  toggle.addEventListener("change", () => {
    const scrollPosition = toggle.checked ? cardWidth + gap : 0;

    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  });

  // Update toggle state based on scroll position
  container.addEventListener("scroll", () => {
    const scrollLeft = container.scrollLeft;
    const currentIndex = Math.round(scrollLeft / (cardWidth + gap));
    toggle.checked = currentIndex === 1;
  });
});
