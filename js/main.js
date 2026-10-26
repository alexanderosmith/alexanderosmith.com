'use strict';

// Search (input only exists on pages with the header)
var searchInput = document.getElementById('js-search-input');
if (searchInput) SimpleJekyllSearch({
  searchInput: searchInput,
  resultsContainer: document.getElementById('js-results-container'),
  json: '/search.json',
  searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
  noResultsText: '<li>No results found</li>'
});

// Switching between posts and categories
var navItems = document.querySelectorAll('.c-nav__item');
navItems.forEach(function (item, i) {
  item.addEventListener('click', function () {
    var showCats = i === navItems.length - 1;
    navItems.forEach(function (n) { n.classList.toggle('is-active', n === item); });
    document.querySelectorAll('.c-posts, .c-load-more, .c-categories').forEach(function (el) {
      var show = el.classList.contains('c-categories') === showCats;
      el.style.display = show ? '' : 'none';
      el.classList.toggle('o-opacity', show);
    });
  });
});

// Load more: all posts are in the page; reveal the next batch
var more = document.querySelector('.c-load-more');
if (more) more.addEventListener('click', function () {
  var hidden = document.querySelectorAll('.c-post[hidden]');
  var perPage = +document.querySelector('.c-posts').dataset.perPage;
  for (var i = 0; i < perPage && i < hidden.length; i++) hidden[i].hidden = false;
  if (hidden.length <= perPage) more.remove();
});

// Scroll to top (smooth via CSS scroll-behavior)
var topBtn = document.querySelector('.c-top');
topBtn.addEventListener('click', function () { window.scrollTo(0, 0); });
window.addEventListener('scroll', function () {
  topBtn.classList.toggle('c-top--active', window.scrollY > window.innerHeight);
}, { passive: true });
