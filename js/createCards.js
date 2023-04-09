function createCards(data) {
const dataContainer = document.getElementById("dataContainer");

  for (let item of data) {
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid expedita repellat quas, vitae fugit soluta nostrum. Quae fugit enim saepe nam magni molestias, provident eaque minus corrupti alias facilis recusandae modi eligendi? Excepturi, molestiae? Aliquam deleniti, iure labore culpa, porro doloribus ab quod blanditiis consectetur sit inventore nesciunt soluta eveniet.'

    const endOfString = Math.floor(Math.random() * text.length);
    randomText = text.slice(0, endOfString);

    const col = document.createElement("div");
    col.classList.add("col");
  
    const card = document.createElement("div");
    card.classList.add("card", "overflow-hidden", "h-100");
  
    const image = document.createElement("img");
    image.setAttribute("src", item.download_url);
    image.classList.add("card-img-top");
  
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "px-4", "pb-3");

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title", "fw-bold", "lh-base");
    cardTitle.innerHTML = item.author;
  
    const cardText = document.createElement("p");
    cardText.classList.add("card-text", "mb-2", "lh-base", "truncate-to-2-lines");
    cardText.innerHTML = randomText;
  
    const showMoreLink = document.createElement("button");
    showMoreLink.classList.add("btn", "btn-link", "mb-2", "px-0", "py-0", "text-decoration-none", "card-link", "d-none");
    showMoreLink.innerHTML = "Show more...";

    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer", "py-3", "bg-transparent");
  
    const firstFooterButton = document.createElement("button");
    firstFooterButton.classList.add("btn", "fw-bold", "me-3", "first-footer-button");
    firstFooterButton.innerHTML = "Save to collection";
  
    const secondFooterButton = document.createElement("button");
    secondFooterButton.classList.add("btn", "fw-bold", "border-2", "second-footer-button");
    secondFooterButton.innerHTML = "Share";
    
    col.appendChild(card);
    card.appendChild(image);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(showMoreLink);
    cardFooter.appendChild(firstFooterButton);
    cardFooter.appendChild(secondFooterButton);
    card.appendChild(cardFooter);
    dataContainer.appendChild(col);

    showOnlyTwoLines(cardText, showMoreLink);
  }
}
