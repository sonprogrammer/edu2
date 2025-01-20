const themeToggleBtn = document.getElementById('moon')
const body = document.body


const savedTheme = localStorage.getItem('theme')

if(savedTheme === 'dark'){
    body.classList.add('dark-mode')
    themeToggleBtn.classList.remove('fa-moon')
    themeToggleBtn.classList.add('fa-sun')
}else{
    body.classList.remove('dark-mode')
    themeToggleBtn.classList.add('fa-moon')
    themeToggleBtn.classList.remove('fa-sun')
}

themeToggleBtn.addEventListener('click', () =>{
    body.classList.toggle('dark-mode')

    if(body.classList.contains('dark-mode')){
        localStorage.setItem('theme', 'dark')
        // themeToggleBtn.classList.remove('fa-moon')
        // themeToggleBtn.classList.add('fa-sun')
    }else{
        localStorage.setItem('theme', 'light')
        // themeToggleBtn.classList.add('fa-moon')
        // themeToggleBtn.classList.remove('fa-sun')
    }
})