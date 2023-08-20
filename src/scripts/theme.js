/* Desenvolva sua lógica aqui ... */

function toggleDarkMode() {
  const html = document.querySelector('html');
  const darkModeButton = document.querySelector('#darkModeButton');

  darkModeButton.addEventListener('click', () => {
    html.classList.toggle('dark-mode');

    const isDarkMode = html.classList.contains('dark-mode');

    localStorage.setItem('@openMusic:darkMode', isDarkMode.toString());

    if (isDarkMode) {
      darkModeButton.innerHTML = '<img src="src/assets/img/sun.svg" alt="Light Mode">';
    } else {
      darkModeButton.innerHTML = '<img src="src/assets/img/moon.svg" alt="Dark Mode">';
    }
  });

  const storedDarkMode = localStorage.getItem('@openMusic:darkMode');

  if (storedDarkMode === 'true') {
    html.classList.add('dark-mode');
    darkModeButton.innerHTML = '<img src="src/assets/img/sun.svg" alt="Light Mode">';
  } else {
    html.classList.remove('dark-mode');
    darkModeButton.innerHTML = '<img src="src/assets/img/moon.svg" alt="Dark Mode">';
  }
}

toggleDarkMode();
