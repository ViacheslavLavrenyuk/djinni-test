function mobileOverlay(breackpoint) {
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const mobileMenuOverlay = document.getElementById("mobileOverlay");
  const mobileMenu = document.getElementById("navbarSupportedContent");

  mobileMenuButton.addEventListener("click", () => {
    if (mobileMenuOverlay.classList.contains('d-none')) {
      mobileMenuOverlay.classList.remove('d-none');
      document.body.classList.add('overflow-hidden');
    } else {
      mobileMenuOverlay.classList.add('d-none');
      document.body.classList.remove('overflow-hidden');
    }
  });

  window.addEventListener("resize", () => {
    if (document.body.clientWidth > breackpoint) {
      mobileMenuOverlay.classList.add('d-none');
      document.body.classList.remove('overflow-hidden');
      mobileMenu.classList.remove('show');
      mobileMenuButton.classList.add('collapsed')
    }
  })
}
