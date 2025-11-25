
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-icon");
  const menuMobile = document.querySelector("ul.linksCellphone");
  const closeBtn = document.querySelector("ul.linksCellphone .close-btn");

  if (!menuBtn || !menuMobile || !closeBtn) {
    console.error("Menu mobile: um ou mais seletores não encontrados", {menuBtn, menuMobile, closeBtn});
    return;
  }
  menuBtn.addEventListener("click", () => {
    menuMobile.classList.add("open");
    menuMobile.setAttribute("aria-hidden", "false");
  });
  closeBtn.addEventListener("click", () => {
    menuMobile.classList.remove("open");
    menuMobile.setAttribute("aria-hidden", "true");
  });
  menuMobile.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menuMobile.classList.remove("open");
      menuMobile.setAttribute("aria-hidden", "true");
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      menuMobile.classList.remove("open");
      menuMobile.setAttribute("aria-hidden", "true");
    }
  });
  document.addEventListener("click", (e) => {
    if (!menuMobile.contains(e.target) && !menuBtn.contains(e.target)) {
      menuMobile.classList.remove("open");
      menuMobile.setAttribute("aria-hidden", "true");
    }
  });
  menuBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      menuBtn.click();
    }
  });
  closeBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      closeBtn.click();
    }
  });
});
