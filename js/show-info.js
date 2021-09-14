const readMoreBtn = document.getElementById('read-more-btn');
const moreText = document.querySelector('.read-more-text');


readMoreBtn.addEventListener('click', (e)=>{
    moreText.classList.toggle('show');
    if(readMoreBtn.innerText === 'wanna know more?'){
        readMoreBtn.innerText = 'i know enough.'
    }else{
        readMoreBtn.innerText = 'wanna know more?'
    }
})