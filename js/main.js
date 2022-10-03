const mobileNav = () => {
    $(document).ready(function(){

        var togglebtn = document.querySelector('.navbar-toggler');
        var mobileSidebar = document.querySelector('.mobile__menu');
      
        if(togglebtn && mobileSidebar ){
           togglebtn.addEventListener('click', () => {
            mobileSidebar.classList.toggle('open')
          })
        }
    })
}
mobileNav();