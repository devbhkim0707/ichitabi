// common.js

// 메인 페이지 외 헤더 영역 검색 메뉴 표시를 위한 변수
let isMainPage = false;

// 헤더 영역 렌더링
$(function () {
  // 세션 스토리지에서 로그인 여부 플래그 정보를 가져옴
  let isLoggedIn = sessionStorage.getItem('isLoggedIn');

  // 만약 'isLoggedIn' 플래그가 세션 스토리지에 없다면
  if (isLoggedIn === null) {
    // 'isLoggedIn'을 'false'로 설정하여 세션 스토리지에 저장
    sessionStorage.setItem('isLoggedIn', 'false');
    isLoggedIn = 'false';
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

    // 로그아웃 버튼
    const logoutBtn = document.getElementById('log-out');

    logoutBtn.addEventListener('click', () => {
      sessionStorage.setItem('isLoggedIn', 'false');
      window.location.reload();
    });

    // 헤더 영역 드롭다운
    const navBarRegionBtn = $('#region-btn');
    const dropdown = $('#dropdown');

    navBarRegionBtn.on('mouseenter', () => {
      dropdown.stop().fadeIn();
    });

    navBarRegionBtn.on('mouseleave', () => {
      dropdown.stop().fadeOut();
    });

    dropdown.on('mouseenter', () => {
      dropdown.stop().fadeIn();
    });

    dropdown.on('mouseleave', () => {
      dropdown.stop().fadeOut();
    });
  });

  // 게시글 작성 플로팅 버튼
  if (isLoggedInBoolean) {
    $('#floating-btn').load('../components/floating_button.html', () => {
      const floatBtn = $('#review-write-btn');
      const toolTip = $('#speech-bubble');

      floatBtn.on('mouseenter', () => {
        toolTip.stop().fadeIn();
      });

      floatBtn.on('mouseleave', () => {
        toolTip.stop().fadeOut();
      });
    });
  }

  $('#footer').load('../components/footer.html');
});
