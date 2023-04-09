const breackpoint = 992;
const limit = 10;
let currentPage = 1;
let totalCard = currentPage * limit;

window.addEventListener('scroll', () => {
  const {
      scrollTop,
      scrollHeight,
      clientHeight
  } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
      currentPage++;
      totalCard = currentPage * limit;
      getText(totalCard);
  
      loadData(currentPage, limit).then(response => {
        createCards(response);
      })
  }
  }, {
      passive: true
  });

loadData(currentPage, limit).then(response => {
  createCards(response);
})

getText(totalCard);
mobileOverlay(breackpoint);
handleViewMode()
