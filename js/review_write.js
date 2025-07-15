// review_write.js

let selectedRating = 0;
const stars = document.querySelectorAll('.star');
const starContent = document.getElementById('star-content');
const ratingsText = ['최악', '그저그럼', '보통', '좋음', '훌륭함'];

function updateStars(rating) {
  stars.forEach((star, i) => {
    star.textContent =
      i < rating
        ? star.classList.add('rating')
        : star.classList.remove('rating');
  });
  starContent.textContent = ratingsText[rating - 1] || '';
}

stars.forEach((star, i) => {
  star.addEventListener('mouseover', () => {
    if (selectedRating === 0) updateStars(i + 1);
  });

  star.addEventListener('mouseout', () => {
    if (selectedRating === 0) updateStars(0);
  });

  star.addEventListener('click', () => {
    selectedRating = i + 1;
    updateStars(selectedRating);
  });
});

// 동행 버튼 - 중복 선택 불가, 다른 버튼 클릭시 옮겨짐
const companionBtn = document.querySelectorAll('.companion .companion-btn');
let selectedBtn = null;
// console.log(companionBtn);

companionBtn.forEach((button) => {
  button.addEventListener('click', function () {
    // 선택된 버튼이 있으면 선택 해제
    if (selectedBtn) {
      selectedBtn.classList.remove('selected');
    }
    // 현재 클릭된 버튼 선택 표시
    this.classList.add('selected');
    selectedBtn = this;

    // 선택된 값 가져오기 - 나중에 필요 할까봐
    // const selectedValue = this.dataset.value;
    // console.log('선택된 값:', selectedValue);
  });
});

const hashtagBtn = document.querySelectorAll('.hashtag-btn');
const tagSselectedBtn = new Set(); // Set을 사용하여 중복 선택 방지

// 해시태그 버튼 - 중복 클릭 가능, 한번더 클릭시 원래대로
hashtagBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent.trim();
    const textWithoutHash = buttonText.replace(/^#/, '');

    if (tagSselectedBtn.has(textWithoutHash)) {
      // 이미 선택된 버튼일 경우 선택 해제
      tagSselectedBtn.delete(textWithoutHash);
      button.classList.remove('selected');
    } else {
      // 선택되지 않은 버튼일 경우 선택
      tagSselectedBtn.add(textWithoutHash);
      button.classList.add('selected');
    }

    // console.log('선택된 버튼:', tagSselectedBtn);
  });
});

// 해시태그 추가히기
const hashtagList = document.getElementById('hashtag-list');
const hashtagInput = document.getElementById('hashtag-input');
const addHashtagBtn = document.getElementById('hashtag-add-btn');
const hashtags = [];
// const hashtagElement = document.createElement('button');

// 추가 버튼 클릭 이벤트 리스너
addHashtagBtn.addEventListener('click', addHashtag);

// 해시태그 추가 함수
function addHashtag(inputText) {
  const hashtagText = (inputText || hashtagInput.value).trim();

  // console.log(hashtagText);
  // 태그 입력 확인
  if (hashtagText === '') {
    alert('해시태그를 입력해주세요.');
    return;
  }

  //모든 공백 제거
  const sanitizedHashtag = hashtagText.replace(/\s/g, '');

  // 특수문자 및 공백 확인
  const specialCharRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (specialCharRegex.test(sanitizedHashtag)) {
    alert('특수문자는 사용할 수 없습니다.');
    hashtagInput.value = '';
    return;
  }

  const hashtagsWithEun = ['맛집', '야경', '공원'];
  const hashtagsWithNeun = ['카페', '테마파크'];
  const predefinedHashtags = [...hashtagsWithEun, ...hashtagsWithNeun];

  // 기본 해시태그일 경우: 클릭 여부에 따라 안내
  if (predefinedHashtags.includes(sanitizedHashtag)) {
    const particle = hashtagsWithEun.includes(sanitizedHashtag) ? '은' : '는';

    if (tagSselectedBtn.has(sanitizedHashtag)) {
      alert(`${sanitizedHashtag}${particle} 위에서 이미 선택되었습니다.`);
    } else {
      alert(`${sanitizedHashtag}${particle} 위에서 선택해 주세요.`);
    }
    hashtagInput.value = '';
    return;
  } else if (hashtags.includes(sanitizedHashtag)) {
    alert('이미 추가된 해시태그입니다.');
    hashtagInput.value = '';
    return; // 사용자 입력 해시태그 중복 체크
  }

  // 해시태그 배열에 추가
  hashtags.push(sanitizedHashtag);

  // 해시태그 요소 생성 및 추가
  const hashtagWrapper = document.createElement('div');
  hashtagWrapper.classList.add('hashtag-item');

  const hashtagElement = document.createElement('span');
  hashtagElement.classList.add('add-hashtag');
  hashtagElement.textContent = `#${sanitizedHashtag}`;

  // 해시태그 삭제 버튼 추가
  // 삭제 버튼 생성
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-btn');
  deleteButton.textContent = 'x';

  // 삭제 버튼 클릭 이벤트
  deleteButton.addEventListener('click', function () {
    hashtagWrapper.remove(); // 삭제버튼 누르면 요소 삭제

    const index = hashtags.indexOf(sanitizedHashtag);
    if (index > -1) {
      hashtags.splice(index, 1);
    }
  });

  // hashtagWrapper에 조립
  hashtagWrapper.appendChild(hashtagElement);
  hashtagWrapper.appendChild(deleteButton);
  hashtagList.appendChild(hashtagWrapper);

  // 입력 필드 초기화
  hashtagInput.value = '';
}

// 엔터 키로도 해시태그 추가
hashtagInput.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // 중복되는 이벤트 한번 무효화 시키기
    const inputValue = hashtagInput.value;
    // setTimeout(addHashtag(), 100);
    addHashtag(inputValue);
  }
});
