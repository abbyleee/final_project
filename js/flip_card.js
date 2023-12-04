var tiles = document.querySelectorAll(".tile");

tiles.forEach(function(tile) {
  tile.addEventListener("click", function () {
    tile.classList.toggle("is-flipped");
  });
});
