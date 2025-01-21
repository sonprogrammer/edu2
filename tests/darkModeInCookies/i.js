const dark = document.getElementById('moon')
const body = document.body

const savedTheme = localStorage.getItem('theme')
console.log('hiu',savedTheme)


if(savedTheme === 'dark'){
    body.classList.add('dark-mode')
    dark.classList.remove('fa-sun')
    dark.classList.add('fa-moon')
}else{
    body.classList.remove('dark-mode')
    dark.classList.add('fa-sun')
    dark.classList.remove('fa-moon')
}

dark.addEventListener('click', () => {
    console.log(savedTheme)

    body.classList.toggle('dark-mode')

    if(body.classList.contains('dark-mode')){
        localStorage.setItem('theme', 'dark')
    }else{
        localStorage.setItem('theme', 'light')
    }
})