function handleViewMode() {
  const lightModeLink = document.getElementById("lightMode");
  const darkModeLink = document.getElementById("darkMode");

  darkModeLink.addEventListener("click", () => {
      document.body.classList.add('dark-mode');
  });

  lightModeLink.addEventListener("click", () => {
    document.body.classList.remove('dark-mode');
  });
}
