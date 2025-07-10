// admin.js

const pages = document.querySelectorAll('.page');
const pageBtns = document.querySelectorAll('.page-btn');

$(function () {
  $('#header').load('../components/header_admin.html', function () {
    document.getElementById('log-out').style.display = 'block';
  });
  $('#footer').load('../components/footer.html');
});

pages.forEach((page) => {
  page.addEventListener('click', () => {
    pages.forEach((p) => p.classList.remove('active'));
    page.classList.add('active');
  });
});

pageBtns.forEach((page) => {
  page.addEventListener('click', () => {
    pageBtns.forEach((p) => p.classList.remove('active'));
    page.classList.add('active');
  });
});
