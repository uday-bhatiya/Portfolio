const projectBtn = document.querySelector('.project-btn');
const projectTab = document.querySelector('.project-content');

const skillBtn = document.querySelector('.skill-btn');
const skillTab = document.querySelector('.skill-content');

projectBtn.addEventListener('click', () => {
    projectTab.classList.add('filter-active');
    skillTab.classList.remove('filter-active');
    projectBtn.classList.add('active-btn');
    skillBtn.classList.remove('active-btn');
})

skillBtn.addEventListener('click', () => {
    skillTab.classList.add('filter-active');
    projectTab.classList.remove('filter-active');
    skillBtn.classList.add('active-btn');
    projectBtn.classList.remove('active-btn');
})

const themeButton = document.getElementById('themeBtn');
const darkTheme = 'dark-theme';

const selectedTheme = localStorage.getItem('selected-theme')


themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.add('fa-sun')
    themeButton.classList.toggle('fa-moon')
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.profile-border`)
sr.reveal(`.profile-name`, {delay: 500})
sr.reveal(`.profile-profession`, {delay: 600})
sr.reveal(`.profile-social`, {delay: 700})
sr.reveal(`.profile-social-links`, {delay: 800})
sr.reveal(`.profile-btn-container`, {delay: 900})
sr.reveal(`.filter-content`, {delay: 900})
sr.reveal(`.filter`, {delay: 1000})
sr.reveal(`.footer-container`, {delay: 1100})