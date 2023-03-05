const colorThemes = document.querySelectorAll('[name = "theme"]');

// FALLBACK APPLY THEME (:has not supported on all browsers)

function applyTheme(themeColor) {
  document.documentElement.className = themeColor;
}

//STORE THEME
function storeTheme(theme) {
  localStorage.setItem('theme', theme);
}

// GET THEME
function getTheme() {
  const storedTheme = localStorage.getItem('theme');

  //selects the correct color theme button
  for (theme of colorThemes) {
    if (theme.id === storedTheme) theme.checked = true;
  }
  applyTheme(storedTheme);
}

// EVENT LISTENER

colorThemes.forEach(theme =>
  theme.addEventListener('click', () => {
    storeTheme(theme.id);
    applyTheme(theme.id);
  })
);

// apply stored theme
document.onload = getTheme();
