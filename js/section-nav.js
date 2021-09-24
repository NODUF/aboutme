const sectionBtn = document.querySelectorAll('.section-nav-btn')

sectionBtn.forEach(button =>{
    button.addEventListener('click', function(){
        sectionBtn.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    })
})