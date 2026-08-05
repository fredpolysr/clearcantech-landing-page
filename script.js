document.getElementById('year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
toggle.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
