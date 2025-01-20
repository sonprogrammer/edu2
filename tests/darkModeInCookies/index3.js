const themeToggleBtn = document.getElementById('moon')
const body = document.body

// 쿠키에서 저장된 테마 값 가져오기
const savedCookie = Cookies.get('theme')
console.log(`Saved cookie: ${savedCookie}`) // 저장된 쿠키 값 확인

// 저장된 테마에 따라 클래스 적용
if(savedCookie === 'dark'){
    body.classList.add('dark-mode')
    themeToggleBtn.className = ''; 
    themeToggleBtn.classList.add('fa-regular', 'fa-sun');
}else{
    body.classList.remove('dark-mode')
}

// 테마 전환 버튼 클릭 시
themeToggleBtn.addEventListener('click', () =>{
    body.classList.toggle('dark-mode')

    if (body.classList.contains('dark-mode')) {
        Cookies.set('theme', 'dark', { expires: 7 })  // 쿠키 설정
        themeToggleBtn.className = ''; 
        themeToggleBtn.classList.add('fa-regular', 'fa-sun');
    } else {
        Cookies.set('theme', 'light', { expires: 7 })  // 쿠키 설정
        themeToggleBtn.className = ''; 
        themeToggleBtn.classList.add('fa-solid', 'fa-moon'); 
    }
})
