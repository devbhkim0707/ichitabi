// reviews_list.js
const hearts = document.querySelectorAll('.favo');

hearts.forEach((heart) => {
  heart.addEventListener('click', () => {
    heart.classList.toggle('on');
  });
});

const reviewList = [
  {
    photo: "../resources/images/reviewList01.jpeg",
    alt: "오다이바 해변공원",
    age: "30대 여성",
    title: "오다이바 해변공원",
    place: "도쿄도",
    hash: "#해변#야경#데이트"
  },
  {
    photo: "../resources/images/reviewList02.jpeg",
    alt: "아사쿠사 센소지",
    age: "20대 남성",
    title: "아사쿠사 센소지",
    place: "도쿄도",
    hash: "#전통#사원#관광"
  },
  {
    photo: "../resources/images/reviewList03.jpeg",
    alt: "시부야 스크램블 교차로",
    age: "20대 여성",
    title: "시부야 스크램블 교차로",
    place: "도쿄도",
    hash: "#도심#인생샷#쇼핑"
  },
  {
    photo: "../resources/images/reviewList04.jpeg",
    alt: "하라주쿠 다케시타 거리",
    age: "10대 여성",
    title: "하라주쿠 다케시타 거리",
    place: "도쿄도",
    hash: "#패션#간식#젊음"
  }
];



const moreBtn = document.getElementById('more-btn');
const reviewUlEl = document.getElementById('review-ul')
const listTempEl = document.getElementById('reviews-template')

moreBtn.addEventListener('click', () => {
  reviewList.forEach(review => {
    const cloneLi = listTempEl.content.firstElementChild.cloneNode(true);
    cloneLi.querySelector('.photo').src = review.photo;
    cloneLi.querySelector('.age').textContent = review.age;
    cloneLi.querySelector('.title').textContent = review.title;
    cloneLi.querySelector('.place').textContent = review.place;
    cloneLi.querySelector('.hash').textContent = review.hash;
    reviewUlEl.appendChild(cloneLi);
  });
})