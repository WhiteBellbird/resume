const toggleBtn = document.getElementById('theme-toggle');

function updateButton() {
  if (document.body.classList.contains('dark')) {
    toggleBtn.textContent = '☀️';
    toggleBtn.title = 'Light Mode';
  } else {
    toggleBtn.textContent = '🌙';
    toggleBtn.title = 'Dark Mode';
  }
}
// 처음에 둘 다 지운다
document.body.classList.remove('dark', 'light');

// OS 다크모드라면 dark 붙인다
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark');
} else {
  document.body.classList.add('light');
}

updateButton();

toggleBtn.addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
  } else {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
  }

  updateButton();
});
