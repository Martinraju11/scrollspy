const navLinks = document.querySelectorAll("#navbar a");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  navLinks.forEach((link) => {
    link.classList.remove("navbar-active");
  });

  for (let i = 0; i < navLinks.length; i++) {
    const section = document.querySelector(navLinks[i].getAttribute("href"));
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks[i].classList.add("navbar-active");
    }
  }
});
