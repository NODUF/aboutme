window.addEventListener('scroll', reveal);

function reveal(){
    var sidescroll = document.querySelector('.section-nav');
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 350;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('r-active');
        }
        else{
            reveals[i].classList.remove('r-active');
        }
    }
}