document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-bar");
    const cards = document.querySelectorAll(".link_style");
  
    searchInput.addEventListener("input", function () {
      const searchText = searchInput.value.toLowerCase();
  
      cards.forEach(function (card) {
        const cardText = card.textContent.toLowerCase();
        const isMatch = cardText.includes(searchText);
  
        if (isMatch) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });