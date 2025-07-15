// review_detail.js

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
