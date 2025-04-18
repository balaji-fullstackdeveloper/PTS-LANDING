document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("right-content")) {
            entry.target.classList.add("animate-slide-right");
          } else if (entry.target.classList.contains("left-content")) {
            entry.target.classList.add("animate-slide-left");
          } else if (entry.target.classList.contains("up-content")) {
            entry.target.classList.add("animate-slide-up");
          }
          else if (entry.target.classList.contains("in-content")) {
            entry.target.classList.add("animate-slide-in");
          } else {
            entry.target.classList.add("animate-zoom-in-scroll");
          }
          entry.target.classList.remove("opacity-0");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px",
    }
  );

  document.querySelectorAll(".scroll-animate").forEach((element) => {
    observer.observe(element);
  });
});
