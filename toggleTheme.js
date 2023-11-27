const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
let currentTheme = calculateThemeSetting({localStorageTheme, systemSettingDark});

// 初始化按鈕亮暗的圖示
updateButton(button, currentTheme === "dark");
// 初始化html的theme(影響所有元素的樣式)
updateThemeOnHtmlEl({ theme: currentTheme });

function calculateThemeSetting({localStorageTheme, systemSettingDark}) {
  if (localStorageTheme !== null) {
    return localStorageTheme
  }

  if (systemSettingDark.matches) {
    return "dark"
  }

  return "light"
}

function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme)
}
   
function updateButton(btnEl, isDark) {
  btnEl.innerHTML = isDark ? '<i class="fa-regular fa-moon"></i>' : '<i class="fa-regular fa-sun"></i>'
}
    
button.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark"

  taiwanBorder.style('stroke', currentTheme === "dark" ? '#000' : '#fff')
  mapText.style("fill", currentTheme === "dark" ? '#fff': '#333');
  if (townBorder) townBorder.style('stroke', currentTheme === "dark" ? '#000' : '#fff');

  localStorage.setItem("theme", currentTheme);
  updateButton(button, currentTheme === "dark");
  updateThemeOnHtmlEl({ theme: currentTheme });
}); 