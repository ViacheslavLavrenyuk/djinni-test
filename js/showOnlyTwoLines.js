function showOnlyTwoLines(block, link) {
  if (block.offsetHeight < block.scrollHeight) {
    link.classList.remove("d-none");
    link.classList.add("d-block");
  }
  
  link.addEventListener("click", () => {
    block.classList.remove("truncate-to-2-lines");
    link.classList.remove("d-block");
    link.classList.add("d-none");
  });
}
