const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

menuBtn?.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.13 });

revealItems.forEach((item, i) => {
  item.style.transitionDelay = `${(i % 4) * 70}ms`;
  observer.observe(item);
});

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const form = document.getElementById("inquiryForm");
const status = document.getElementById("formStatus");

// Replace this email with the Media Unit's real address before publishing.
const CONTACT_EMAIL = "mediaunit@sanghabodhi.example";

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");

  const subject = encodeURIComponent(`Media Unit Enquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nEnquiry:\n${message}`
  );

  status.textContent = "Opening your email app…";
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

  setTimeout(() => {
    status.textContent = "Enquiry prepared. Connect a real backend/email service for production.";
    form.reset();
  }, 1000);
});

// Respect reduced-motion accessibility settings.
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll("*").forEach(el => {
    el.style.scrollBehavior = "auto";
    el.style.animationDuration = "0.01ms";
    el.style.transitionDuration = "0.01ms";
  });
}
