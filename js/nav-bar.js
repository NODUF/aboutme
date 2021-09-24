var marker = document.querySelector('#marker');
var item = document.querySelector('menu-item')

function indicator(e){
    marker.style.left = e.offsetLeft+"px";
    marker.style.width = e.offsetWidth+"px";
}

menuItem.forEach(link => {
    link.addEventListener('click', (e)=>{
        indicator(e.target);
    })
});