// reviews_list.js

function clickHearts() {
  const hearts = document.querySelectorAll('.favo');
  
  hearts.forEach((heart) => {
    heart.addEventListener('click', () => {
      heart.classList.toggle('on');
    });
  });
}

clickHearts();

const reviewList = [
  {
    photo: '../resources/images/reviewList01.jpeg',
    alt: '마루시치 긴자점',
    age: '30대 남성',
    title: '마루시치 긴자점',
    place: '도쿄도 주오구',
    hash: '#맛집 #카츠동 #돈카츠',
  },
  {
    photo: '../resources/images/reviewList02.jpeg',
    alt: '긴자 스시 후쿠쥬',
    age: '30대 남성',
    title: '긴자 스시 후쿠쥬(鮨 ふくじゅ)',
    place: '도쿄도 주오구',
    hash: '#맛집 #스시 #오마카세',
  },
  {
    photo: '../resources/images/reviewList03.jpeg',
    alt: '우설 전문점 네기시 도겐자카점(ねぎし)',
    age: '30대 남성',
    title: '우설 전문점 네기시 도겐자카점(ねぎし)',
    place: '도쿄도 신주쿠구',
    hash: '#맛집 #우설 #체인점',
  },
  {
    photo: '../resources/images/reveiwList07.jpeg',
    alt: '카사이 린카이 수족관',
    age: '20대 남성',
    title: '카사이 린카이 수족관',
    place: '도쿄도',
    hash: '#노을빛 #인생사진 #수족관',
  },
  {
    photo: '../resources/images/reviewList04.jpeg',
    alt: '오니버스 커피',
    age: '20대 여성',
    title: 'onibuscoffee (오니버스 커피)',
    place: '메구로구',
    hash: '#도쿄카페 #나카메구로 #드립커피',
  },
  {
    photo: '../resources/images/reviewList05.jpeg',
    alt: 'spring valley brewery',
    age: '20대 여성',
    title: 'spring valley brewery (スプリングバレーブルワリー東京)',
    place: '시부야구',
    hash: '#도쿄맥주 #다이칸야마 #브루어리',
  },
  {
    photo: '../resources/images/reviewList06.jpeg',
    alt: 'bellustar',
    age: '20대 여성',
    title: 'bellustar',
    place: '신주쿠구',
    hash: '#도쿄야경 #벨루스타도쿄 #칵테일',
  },
  {
    photo: '../resources/images/reviewList08.png',
    alt: '요요기공원(代々木公園)',
    age: '20대 남성',
    title: '요요기공원(代々木公園)',
    place: '도쿄도',
    hash: '#공원 #산책 #운동',
  },
  {
    photo: '../resources/images/reviewList01.jpeg',
    alt: '오다이바 해변공원',
    age: '30대 여성',
    title: '오다이바 해변공원',
    place: '도쿄도',
    hash: '#해변#야경#데이트',
  },
  {
    photo: '../resources/images/reviewList02.jpeg',
    alt: '아사쿠사 센소지',
    age: '20대 남성',
    title: '아사쿠사 센소지',
    place: '도쿄도',
    hash: '#전통#사원#관광',
  },
  {
    photo: '../resources/images/reviewList03.jpeg',
    alt: '시부야 스크램블 교차로',
    age: '20대 여성',
    title: '시부야 스크램블 교차로',
    place: '도쿄도',
    hash: '#도심#인생샷#쇼핑',
  },
  {
    photo: '../resources/images/reviewList04.jpeg',
    alt: '하라주쿠 다케시타 거리',
    age: '10대 여성',
    title: '하라주쿠 다케시타 거리',
    place: '도쿄도',
    hash: '#패션#간식#젊음',
  }
];

const moreBtn = document.getElementById('more-btn');
const reviewUlEl = document.getElementById('review-ul');
const listTempEl = document.getElementById('reviews-template');

let currentIndex = 0;
function renderReviews(count) {
  const nextReviews = reviewList.slice(currentIndex, currentIndex + count);

  nextReviews.map(review => {
    const cloneLi = listTempEl.content.firstElementChild.cloneNode(true);
    cloneLi.querySelector('.photo').src = review.photo;
    cloneLi.querySelector('.age').textContent = review.age;
    cloneLi.querySelector('.title').textContent = review.title;
    cloneLi.querySelector('.place').textContent = review.place;
    cloneLi.querySelector('.hash').textContent = review.hash;
    reviewUlEl.appendChild(cloneLi);
  });

  currentIndex += nextReviews.length;

  if (currentIndex >= reviewList.length) {
    moreBtn.style.display = 'none';
  }
}

renderReviews(8);

moreBtn.addEventListener('click', () => {
  renderReviews(4);
});

clickHearts();