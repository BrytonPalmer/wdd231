document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("mobile-nav");
  const icon = document.getElementById("hamburger-icon");
  const links = document.querySelectorAll(".nav-link");
  const currentPath = window.location.pathname.split("/").pop();

  // Highlight active nav link
  links.forEach(link => {
    const linkPath = link.getAttribute("href").split("/").pop();
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });

  // Hamburger toggle
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");

    // Toggle icon between ☰ and ✖
    if (nav.classList.contains("show")) {
      icon.textContent = "✖";
    } else {
      icon.textContent = "☰";
    }
  });
});