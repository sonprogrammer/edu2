// document.querySelector('button').addEventListener('click', () => {
//     let body = document.querySelector('body')
//     body.style.backgroundColor ='white'
// })

const themeToggleBtn = document.getElementById('themeToggle')
const body = document.body

const getCookie = (name) =>{
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if(parts.length === 2) return parts.pop().split(';').shift()
}

const setCookie = (name, value, days) => {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`
}

const savedTheme = getCookie('theme')
if(savedTheme === 'dark'){
    body.classList.add('dark-mode')
    themeToggleBtn.textContent='Switch to Light Mode'
}else{
    themeToggleBtn.textContent='Switch to Dark Mode'
}


themeToggleBtn.addEventListener('click', () =>{
    body.classList.toggle('dark-mode')

    if(body.classList.contains('dark-mode')){
        setCookie('theme', 'dark', 7)
        themeToggleBtn.textContent = 'Switch to Light Mode'
        console.log('document', document)
    }else{
        setCookie('theme', 'ligth', 7)
        themeToggleBtn.textContent = 'Switch to Dark Mode'
        console.log('document', document.cookie)
    }
})