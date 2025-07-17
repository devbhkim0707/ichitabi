// review_detail.js

import reviews from '../resources/data/reviews.js';
console.log(reviews[0].imagePath[0]);

const likeBtn = document.getElementById('like-btn');
const likeCount = document.getElementById('like-count');
let count = 0;

likeBtn.addEventListener('click', () => {
  likeBtn.classList.toggle('on');
  if (likeBtn.classList.contains('on')) {
    likeCount.innerHTML = ++count;
  } else {
    likeCount.innerHTML = --count;
  }
});

const nameEl = document.getElementById('name');
const hashtagEl = document.getElementById('hashtag');
const photeLeftEl = document.querySelector('.photo-left');
const photeRight1El = document.querySelector('.photo-right1');
const photeRight2El = document.querySelector('.photo-right2');
const nickEl = document.getElementById('nick');
const genderEl = document.getElementById('gender');
const ageEl = document.getElementById('age');
const dateEl = document.getElementById('date');
const companionContentEl = document.getElementById('companion-content');
const contentEl = document.querySelector('.content-1');
const nick1El = document.getElementById('nick1');

getReviewerInfo();

async function getReviewerInfo() {
  const users = await getUsers();
  const reviewer = await users.find((user) => user.email === reviews[0].user);

  nickEl.textContent = reviewer.nickname;
  genderEl.textContent = reviewer.gender === 'm' ? '남성' : '여성';
  ageEl.textContent = reviewer.birthDate;
}

nameEl.textContent = reviews[0].title;
hashtagEl.textContent = reviews[0].hashtag.map((tag) => `#${tag}`).join(' ');
photeLeftEl.src = reviews[0].imagePath[0];
photeRight1El.src = reviews[0].imagePath[1];
photeRight2El.src = reviews[0].imagePath[2];
dateEl.textContent = reviews[0].date;
companionContentEl.textContent = reviews[0].companion;
contentEl.textContent = reviews[0].content;
nick1El.textContent = reviews[0]._id;

const recommendUlEl = document.getElementById('recommend-ul');
const recommendTempEl = document.getElementById('recommend-template');

function renderRecommend(count) {
  const nextReviews = reviews.slice(0, count);

  nextReviews.map((review) => {
    const cloneLi = recommendTempEl.content.firstElementChild.cloneNode(true);
    cloneLi.querySelector('.photo').src = review.imagePath[0];
    cloneLi.querySelector('.title').textContent = review.title;
    cloneLi.querySelector('.place').textContent = review.location;
    cloneLi.querySelector('.hash').textContent = review.hashtag
      .map((tag) => `#${tag}`)
      .join(' ');
    recommendUlEl.appendChild(cloneLi);
  });
}

renderRecommend(5);

// 상세 이미지 fallback 처리
document.querySelectorAll('#main-img img').forEach((img) => {
  // 이미지가 없거나 에러났을 때 처리
  const handleFallback = () => {
    img.style.display = 'none';

    const fallbackDiv = document.createElement('div');
    fallbackDiv.className = 'img-fallback';

    img.parentElement.appendChild(fallbackDiv);
  };

  if (!img.getAttribute('src') || img.getAttribute('src').trim() === '') {
    handleFallback(); // src가 빈 경우
  } else {
    img.onerror = handleFallback; // 로딩 실패한 경우
  }
});

// 아바타 이미지 fallback 처리
const avatarImg = document.querySelector('#avatar img');

if (avatarImg) {
  if (
    !avatarImg.getAttribute('src') ||
    avatarImg.getAttribute('src').trim() === ''
  ) {
    avatarImg.setAttribute('src', '../resources/icons/user.png');
  }

  avatarImg.onerror = function () {
    this.setAttribute('src', '../resources/icons/user.png');
  };
}

async function getUsers() {
  return fetch('../resources/data/user.json').then((res) => {
    return res.json();
  });
}
