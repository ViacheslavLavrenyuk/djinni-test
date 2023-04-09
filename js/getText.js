function getText(totalCard) {
  const cardsCount = document.getElementById('cardsCount');
  let itemText = '';

  itemText = totalCard === 1 ? 'item' : 'items';

  let fullText = `${totalCard} ${itemText}`;

  cardsCount.innerHTML = fullText;
}
