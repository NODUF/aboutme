const btnIcon = document.querySelector('.profile-expand i');
const btn = document.querySelector('.profile-expand')
const toggleInfo = document.querySelector('.profile-info');
//btnIcon.innerHTML = "expand_less";
//toggleInfo.classList.toggle('active')

btn.addEventListener('click', (e)=>{
   toggleInfo.classList.toggle('active');
   if(toggleInfo.classList.contains('active')){
      btnIcon.innerHTML = 'expand_less';
   }else{
      btnIcon.innerHTML = 'expand_more';
   }
})