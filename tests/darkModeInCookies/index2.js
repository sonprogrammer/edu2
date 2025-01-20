const themeToggleBtn = document.getElementById('moon')
const body = document.body

const getCookie = (name) => {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    console.log(value, parts)

    if(parts.length === 2) return parts.pop().split(';').shift()
}

const setCookie = (name, value, days) => {
    const date = new Date()
    console.log(date)
    date.setTime(date.getTime() + days * 24 * 3600 * 1000)
    document.cookie = `${name}=${value};  expires=${date.toUTCString()}; path=/`

}

const savedCookie = getCookie('theme')
console.log(`Saved cookie: ${savedCookie}`) // 저장된 쿠키 값 확인

if(savedCookie === 'dark'){
    body.classList.add('dark-mode')
    themeToggleBtn.className = ''; 
    themeToggleBtn.classList.add('fa-regular', 'fa-sun');
}else{
    body.classList.remove('dark-mode')
}


themeToggleBtn.addEventListener('click', () =>{
    body.classList.toggle('dark-mode')
    
    if (body.classList.contains('dark-mode')) {
        setCookie('theme','dark', 7)
        themeToggleBtn.className = ''; 
        themeToggleBtn.classList.add('fa-regular', 'fa-sun');
    } else {
        setCookie('theme','light', 7)
        themeToggleBtn.className = ''; 
        themeToggleBtn.classList.add('fa-solid', 'fa-moon'); 
    }
})