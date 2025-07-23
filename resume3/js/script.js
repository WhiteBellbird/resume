// script.js

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('ul.menu');
  const btnFollow = document.querySelector('.btn-follow');

  // 햄버거 메뉴 토글
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('open');
  });

  // 스크롤 시 nav 배경 변화
  window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // 팔로우 버튼 클릭 예시 (alert)
  btnFollow.addEventListener('click', () => {
    alert('팔로우 기능은 준비 중입니다.');
  });

  // 기술 스킬 섹션 - 클릭 선택 기능 (추후 skills 섹션 구현 후 연결)
  // 예시:
  // document.querySelectorAll('.skill-tag').forEach(tag => {
  //   tag.addEventListener('click', () => {
  //     tag.classList.toggle('selected');
  //     alert(`${tag.textContent} 스킬이 선택/해제되었습니다.`);
  //   });
  // });

  // 폼 유효성 검사 및 전송 처리도 추후 추가 예정
});
