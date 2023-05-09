function hideMenu(navMobileElem, overlayElem) {
  navMobileElem.style.transform = "translateX(-200%)";
  overlayElem.style.transform = "translateX(-100%)";
}

function openMenu(navMobileElem, overlayElem) {
  navMobileElem.style.transform = "translateX(0)";
  overlayElem.style.transform = "translateX(0)";
}

(() => {
  const headerElem = document.querySelector(".header");
  if (!headerElem) return;

  headerElem.addEventListener("click", (e) => {
    e.preventDefault();

    const navMobileElem = headerElem.querySelector(".nav-mobile");
    const overlayElem = headerElem.querySelector(".header-overlay");
    if (!navMobileElem || !overlayElem) return;

    if (e.target.closest(".menu-mobile-icon")) {
      // console.log("clicked menu mobile!")

      openMenu(navMobileElem, overlayElem);
    }

    if (
      e.target.closest(".nav-close") ||
      e.target.closest(".header-overlay") ||
      e.target.closest(".nav-mobile a")
    ) {
      hideMenu(navMobileElem, overlayElem);
    }
  });
})();
