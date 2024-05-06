const navbar = document.querySelector("#navbar");
let ikon = document.querySelector("#menu");

ikon.addEventListener("click",function(e){

    if(ikon.classList.contains('fa-bars')){
        ikon.classList.remove('fa-bars');
        ikon.classList.add('fa-times');
        navbar.style.left='0';
    }else{
        ikon.classList.remove('fa-times');
        ikon.classList.add('fa-bars');
        navbar.style.left='-100%';
    }
    e.preventDefault();
});