// common.js

// 메인 페이지 외 헤더 영역 검색 메뉴 표시를 위한 변수
let isMainPage = false;

//
$(function () {
  // 세션 스토리지에서 로그인 여부 플래그 정보를 가져옴
  let isLoggedIn = sessionStorage.getItem('isLoggedIn');

  // 만약 'isLoggedIn' 플래그가 세션 스토리지에 없다면
  if (isLoggedIn === null) {
    // 'isLoggedIn'을 'false'로 설정하여 세션 스토리지에 저장
    sessionStorage.setItem('isLoggedIn', 'false');
    isLoggedIn = 'false';
  } else {
    console.log('현재 isLoggedIn 플래그 값:', isLoggedIn);
  }

  const isLoggedInBoolean = isLoggedIn === 'true';

  $('#header').load('../components/header.html', function () {
    // 헤더 영역의 검색 메뉴 표시 여부 결정
    if (isMainPage) {
      document.getElementById('header-search').style.display = 'none';
    } else if (!isMainPage) {
      document.getElementById('header-search').style.display = 'block';
    }
    if (isLoggedInBoolean) {
      document.getElementById('log-out').style.display = 'block';
      document.getElementById('sign-in').style.display = 'none';
      document.getElementById('sign-up').style.display = 'none';
    } else if (!isLoggedInBoolean) {
      document.getElementById('log-out').style.display = 'none';
      document.getElementById('sign-in').style.display = 'block';
      document.getElementById('sign-up').style.display = 'block';
    }
  });
  $('#footer').load('../components/footer.html');
});
