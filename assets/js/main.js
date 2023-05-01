(() => {
  const headerElem = document.querySelector(".header");
  if (!headerElem) return;

  headerElem.addEventListener("click", (e) => {
    const navMobileElem = headerElem.querySelector(".nav-mobile");
    const overlayElem = headerElem.querySelector(".header-overlay");
    if (!navMobileElem || !overlayElem) return;

    if (e.target.closest(".menu-mobile-icon")) {
      // console.log("clicked menu mobile!")

      navMobileElem.style.transform = "translateX(0)";
      overlayElem.style.transform = "translateX(0)";
    }

    if (e.target.closest(".nav-close")) {
      navMobileElem.style.transform = "translateX(-200%)";
      overlayElem.style.transform = "translateX(-100%)";
    }
  });
})();
