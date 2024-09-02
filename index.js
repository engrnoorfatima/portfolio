burger = document.querySelector('.burger')
navList = document.querySelector('.nav-list')
btnResp = document.querySelector('.btn-resp')
sticky = document.querySelector('.sticky')
logo = document.querySelector('.logo')

burger.addEventListener('click', ()=>{
   btnResp.classList.toggle('v-class-resp');
   navList.classList.toggle('v-class-resp');
   logo.classList.toggle('v-class-resp');
   sticky.classList.toggle('h-nav-resp');
   sticky.classList.toggle('bcolor-resp');
})