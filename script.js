const nama = document.querySelector('.sectionOne .hero h1');
const judul = document.querySelector('.sectionOne .hero h2');
const aboutMe = document.querySelector('.aboutMe h1');
const imgSatu = document.querySelector('.image img.imgSatu');
const imgDua = document.querySelector('.image img.imgDua');
const imgTiga = document.querySelector('.image img.imgTiga');
const imgEmpat = document.querySelector('.image img.imgEmpat');
const imgLima = document.querySelector('.image img.imgLima');
const imgEnam = document.querySelector('.image img.imgEnam');
const imgTujuh = document.querySelector('.image img.imgTujuh');
const imgDelapan = document.querySelector('.image img.imgDelapan');
const projectSatu = document.querySelector('.sectionThree');
const projectDua = document.querySelector('.sectionFour');
const skills = document.querySelector('.sectionFive .skill h1');
const contact = document.querySelector('.sectionSix .container h1');
const loader = document.querySelector('.preloader');

/* loader start */
window.addEventListener('load', ()=>{preloader()});

function preloader(){
    loader.style.opacity = 0;

    setTimeout(() => {
        loader.style.display = "none";
    }, 2000);
}
/* loader end */

/* animation start */
window.onload = heroLoad;

function heroLoad(){
    setTimeout(() => {
        nama.style.bottom = 0;
        nama.style.opacity = 1;        
    }, 200);

    setTimeout(() => {
        judul.style.bottom = 0;
        judul.style.opacity = 1;
    }, 400);
}

window.addEventListener('scroll', ()=>{winScroll()});

function winScroll(){
    const scrolled = window.scrollY;
    console.log(scrolled);

    if(scrolled >= 426){
        aboutMe.style.left = -100 + scrolled/25 + "vh";
    };

    if(scrolled >= 1205){
        imgSatu.style.top = -80 + -scrolled/18 + "vh";
        imgDua.style.top = -100 + -scrolled/27 + "vh";
        imgTiga.style.top = -60 + -scrolled/32 + "vh";
        imgEmpat.style.top = -70 + -scrolled/50 + "vh";
    }

    if(scrolled >= 1656){
        aboutMe.style.display = "none";
    }else{
        aboutMe.style.display = "block";
    }

    if(scrolled >= 1949 && scrolled <= 3249){
        projectSatu.style.position = "sticky";
        projectSatu.style.opacity = 1;
    } else if (scrolled >= 3249 || scrolled <= 1949){
        projectSatu.style.opacity = 0;
    }

    if(scrolled >= 3249 && scrolled <= 4162){
        projectDua.style.opacity = 1;
        projectDua.style.position = "sticky";
    } else if (scrolled <= 3249 || scrolled >= 4162){
        projectDua.style.opacity = 0;
    }

    if(scrolled >= 2492){
        imgLima.style.top = 210 + -scrolled/15 + "vh";
        imgEnam.style.top = 70 + -scrolled/29 + "vh";
        imgTujuh.style.top = 80 + -scrolled/75 + "vh";
        imgDelapan.style.top = 110 + -scrolled/40 + "vh";
    }

    if(scrolled >= 3596){
        skills.style.right = -200 + scrolled/23 + "vh";
    };

    if(scrolled >= 3793){
        contact.style.left = -320 + scrolled/20 + "vh";
    };
}
/* animation end */



