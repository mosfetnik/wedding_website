function toggleDropdown() {
  var dropdownMenu = document.getElementById("hero_sec_dropdownMenu");
  if (dropdownMenu.style.display === "none") {
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
  }
}

function selectItem(item) {
  var searchInput = document.getElementById("hero_sec_searchInput");
  searchInput.value = item;
  toggleDropdown();
}


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  x[slideIndex - 1].style.display = "block";
}

// tanuj code
var button=document.querySelector('.prev-button');
button.style.height='30px';
button.style.width='10px';

var slider = new Swiper(".gallery-to-look-for",{
    slidedsPreview:4.7,
    spaceBetween:35,
    navigation: {
        nextEl:".next-button",
        prevEl:".prev-button",
    },
});