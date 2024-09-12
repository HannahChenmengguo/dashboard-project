const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const radioButtons = document.querySelectorAll('.toggle__wrapper > input');

const setDarkMode = () => {
    document.querySelector('body').classList = 'dark';
  };

const setLightMode = () => {
document.querySelector('body').classList = 'light';
};

radioButtons.forEach((button)=> {
    button.addEventListener('click', (e) => {
       darkButton.checked ? setDarkMode(): setLightMode();
    });
});