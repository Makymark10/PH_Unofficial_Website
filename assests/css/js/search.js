const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');
const searchForm = document.querySelector('.box');
let isFormOpen = false;

searchIcon.addEventListener('click', function(event) {
  event.preventDefault();

  if (!isFormOpen) {
    searchInput.classList.add('active');
    searchForm.classList.add('active');
    searchInput.focus();
    isFormOpen = true;
  } else {
    searchInput.classList.remove('active');
    searchForm.classList.remove('active');
    isFormOpen = false;
  }
});

document.addEventListener('click', function(event) {
  const isClickedInsideSearchBox = searchForm.contains(event.target) || searchIcon.contains(event.target);

  if (!isClickedInsideSearchBox && isFormOpen) {
    searchInput.classList.remove('active');
    searchForm.classList.remove('active');
    isFormOpen = false;
  }
});

function isResponsive() {
  return window.matchMedia('(max-width: 992px)').matches;
}
