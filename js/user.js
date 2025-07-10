// user.js
const submitBtn = document.querySelector('.submitBtn');
const maleBtn = document.querySelector('.male-Btn');
const femaleBtn = document.querySelector('.female-Btn');

const emailInput = document.getElementById('email');
const pwInput = document.getElementById('password');
const rePwInput = document.getElementById('re-password');
const togglePassword = document.getElementById('togglePassword');
const toggleRePassword = document.getElementById('toggleRePassword');
const nameInput = document.getElementById('name');
const birthInput = document.getElementById('birth-date');
const agreeCheckbox = document.getElementById('agree');

let selectedGender = null;

maleBtn.addEventListener('click', () => {
  selectedGender = 'male';
  maleBtn.classList.add('selected');
  femaleBtn.classList.remove('selected');
});

femaleBtn.addEventListener('click', () => {
  selectedGender = 'female';
  maleBtn.classList.remove('selected');
  femaleBtn.classList.add('selected');
});

function isVaildEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

togglePassword.addEventListener('click', () => {
  const isHidden = pwInput.type === 'password';
  pwInput.type = isHidden ? 'text' : 'password';

  if (isHidden) {
    togglePassword.classList.remove('isHidden');
    togglePassword.classList.add('visible');
  } else {
    togglePassword.classList.remove('visible');
    togglePassword.classList.add('hidden');
  }
});

toggleRePassword.addEventListener('click', () => {
  const isHidden = rePwInput.type === 'password';
  rePwInput.type = isHidden ? 'text' : 'password';
  if (isHidden) {
    toggleRePassword.classList.remove('Hidden');
    toggleRePassword.classList.add('visible');
  } else {
    toggleRePassword.classList.remove('visible');
    toggleRePassword.classList.add('hidden');
  }
});

submitBtn.addEventListener('click', () => {
  const email = emailInput.value.trim();
  const password = pwInput.value.trim();
  const rePassword = rePwInput.value.trim();
  const nickname = nameInput.value.trim();
  const birth = birthInput.value.trim();

  if (!email || !password || !rePassword || !nickname || !birth) {
    alert('모든 입력 칸을 채워주세요.');
    return;
  }
  if (!isVaildEmail(email)) {
    alert('올바른 이메일 형식을 입력해주세요.');
    return;
  }
  function isStrongPassword(password) {
    const lengthCheck = password.length >= 8;
    const hasLatter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return lengthCheck && hasLatter && hasNumber && hasSpecial;
  }
  if (!isStrongPassword(password)) {
    alert('비밀번호는 8자 이상, 영문/숫자/특수문자를 포함해야합니다.');
    pwInput.focus();
    return;
  }
  if (password !== rePassword) {
    alert('비밀번호가 일치하지 않습니다.');
    return;
  }
  if (nickname.length < 4) {
    alert('닉네임은 4글자 이상이어야 합니다.');
    return;
  }
  if (!selectedGender) {
    alert('성별을 선택해주세요.');
    return;
  }
  if (!/^\d{8}$/.test(birth)) {
    alert('생년월일은 8자리 숫자로 입력해주세요.(예:19990101)');
    birthInput.focus();
    return;
  }
  if (!agreeCheckbox.checked) {
    alert('개인정보 수집 동의에 체크해주세요.');
    return;
  }
  alert('회원가입이 완료되었습니다!');
});
