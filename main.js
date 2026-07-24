/**
 * Task-01: Responsive Landing Page
 * Student: Akki Joshi | B.Tech 3rd Year CSE | Graphic Era Hill University
 *
 * Interactive Navigation Menu:
 * - Changes style on scroll
 * - Hover effects on menu items
 * - Mobile hamburger toggle
 * - Active page highlighting
 */

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Scroll: add/remove 'scrolled' class to change navbar background
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  // Mobile menu toggle
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // Close mobile menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger?.classList.remove("active");
      navMenu?.classList.remove("active");
    });
  });

  // Highlight active page in navigation
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
});
