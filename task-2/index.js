import './index.css';

const cookieDiv = document.querySelector('.cookie-consent');

document.addEventListener('DOMContentLoaded', (event) => {
  const cookieConsented = localStorage.getItem('cookie-consented');
  if (cookieConsented === 'true' && cookieDiv)
    cookieDiv.style.display = 'none';
});

const cookieButton = cookieDiv?.querySelector('.cookie-consent__button');
cookieButton?.addEventListener('click', (event) => {
  localStorage.setItem('cookie-consented', 'true');
  cookieDiv.style.display = 'none';
});
