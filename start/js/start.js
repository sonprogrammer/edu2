const main = document.querySelector('#main')
const qna = document.querySelector('#qna')

function begin() {

    // main.style.WebkitAnimation = "fadeOut 1s";
    // main.style.animation = "fadeOut 1s";
    // qna.style.WebkitAnimation = "fadeIn 1s";
    // qna.style.animation = "fadeIn 1s";
    main.style.display = 'none';
    qna.style.display = 'block';
    goNext()
}

function goNext(){
    let q = document.querySelector('.qBox')
    q.innerHTML = qnaList[0].q
}