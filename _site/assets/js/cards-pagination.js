document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".cards-container");
  const dots = document.querySelectorAll(".pagination-dot");
  const cards = document.querySelectorAll(".cards-container > div > div");
  let isScrolling = false;
  let scrollTimeout;

  // Update active dot based on scroll position
  function updateActiveDot() {
    const scrollLeft = container.scrollLeft;
    const cardWidth = cards[0].offsetWidth;
    const gap = 16; // 1rem gap between cards
    const currentIndex = Math.round(scrollLeft / (cardWidth + gap));

    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("active");
        dot.classList.remove("bg-gray-300");
        dot.classList.add("bg-blue-500");
      } else {
        dot.classList.remove("active");
        dot.classList.add("bg-gray-300");
        dot.classList.remove("bg-blue-500");
      }
    });
  }
  console.log("balaji");

  // Handle dot clicks
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      const cardWidth = cards[0].offsetWidth;
      const gap = 16; // 1rem gap between cards
      const scrollPosition = index * (cardWidth + gap);

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    });
  });

  // Handle scroll events
  container.addEventListener("scroll", () => {
    isScrolling = true;
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      isScrolling = false;
      updateActiveDot();
    }, 100);
  });

  // Initial active dot
  updateActiveDot();
});
