// main.js
isMainPage = true;

// 간토 지방 클릭 이벤트 href
const regionKanto = document.getElementsByClassName('kiqJ8lXv0XRSXSa_ThjML')[2];

regionKanto.addEventListener('click', () => {
  window.location.href = './reviews/map.html';
});

const hashs = document.querySelectorAll('#hash-div p');
const seasons = document.querySelectorAll('#hash-season p');

hashs.forEach((hash, i) => {
  hash.addEventListener('click', () => {
    hashs.forEach((review) => {
      review.classList.remove('active');
    });
    hashs[i].classList.add('active');
  });
});

seasons.forEach((season, i) => {
  season.addEventListener('click', () => {
    seasons.forEach((festival) => {
      festival.classList.remove('active');
    });
    seasons[i].classList.add('active');
  });
});

// 축제 영역 캐러셀
const festivalNextBtn = document.getElementById('btn-next-festival');
const festivalPrevBtn = document.getElementById('btn-prev-festival');
const festivalsListUl = document.querySelector('#festivals-list ul');

let currentIndex = 0;

festivalNextBtn.addEventListener('click', () => {
  currentIndex = slide(festivalsListUl, 'left', currentIndex);
});

festivalPrevBtn.addEventListener('click', () => {
  currentIndex = slide(festivalsListUl, 'right', currentIndex);
});

function slide(element, direction, index) {
  const slideWidth = 300;
  const transitionSpeed = 300;
  const elementLength = element.querySelectorAll('li').length;

  const visibleItems = 4;

  if (direction === 'left') {
    if (index === elementLength - visibleItems) {
      setTimeout(() => {
        bounce(direction), 200;
      });
    } else {
      index++;
    }
  } else if (direction === 'right') {
    if (index === 0) {
      setTimeout(() => {
        bounce(direction), 200;
      });
    } else {
      index--;
    }
  }
  setTimeout(() => {
    element.style.transform = `translateX(${-(slideWidth * index)}px)`;
    element.style.transition = `all ${transitionSpeed}ms ease`;
  }, 100);
  return index;

  function bounce(direction) {
    if (direction === 'left') {
      element.style.transform = `translateX(${-(slideWidth * index - 100)}px)`;
    } else if (direction === 'right') {
      element.style.transform = `translateX(${-(slideWidth * index + 100)}px)`;
    }
    element.style.transition = `all ${transitionSpeed}ms ease`;
  }
}
