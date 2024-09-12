const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const radioButtons = document.querySelectorAll('.toggle__wrapper > input');

const setDarkMode = () => {
    document.querySelector('body').classList = 'dark';
    localStorage.setItem('theme', 'dark');
  };

const setLightMode = () => {
  document.querySelector('body').classList = 'light';
  localStorage.setItem('theme', 'light');
};

radioButtons.forEach((button)=> {
    button.addEventListener('click', (e) => {
       darkButton.checked ? setDarkMode(): setLightMode();
    });
});


const updateTheme = () =>{
  const isPreferDark = window.matchMedia ('(prefers-color-scheme: dark)').matches;

  isPreferDark ? darkButton.click() : lightButton.click();
  
}

updateTheme()

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);