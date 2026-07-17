const currentYear = () => {
  const year = new Date().getFullYear();
  const current_year = document.getElementById("current-year");
  current_year.textContent = year;
};

const myBackground = () => {
  const buttons = document.querySelectorAll(".my-background button");

  const activateButton = (e) => {
    const button = e.currentTarget;
    const controls = button.getAttribute("aria-controls");
    const getDd = document.getElementById(controls);
    getDd.classList.toggle("active");
    const active = getDd.classList.contains("active");
    button.setAttribute("aria-expanded", active);
  };

  buttons.forEach((button) => {
    button.addEventListener("click", activateButton);
  });
};

const ActiveMenu = () => {
  const links = document.querySelectorAll(".nav-menu a");

  links.forEach((link) => {
    const url = location.href;
    const href = link.href;

    if (url === href) {
      link.classList.add("active");
    }
  });
};

export { currentYear, myBackground, ActiveMenu };
