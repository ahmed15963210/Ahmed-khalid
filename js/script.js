let btn0=document.querySelectorAll(".btn")[0];
let btn3=document.querySelectorAll(".btn")[3];
let btn_download=document.querySelector(".download");
let btn_hire_me=document.querySelector(".hire-me");
let audio=document.querySelector(".audio");
btn0.onclick=function(){
    audio.src="/portofolio/soound/mixkit-modern-click-box-check-1120.wav";
    btn0.style.cssText=
    `
    transform: scale(0.9);
    `;
    setTimeout(function(){
    btn0.style.cssText=
    `
    transform: scale(1);
    `;
    },150);
}
btn_download.onclick=function(){
    audio.src="/portofolio/soound/mixkit-modern-click-box-check-1120.wav";
    btn_download.style.cssText=
    `
    transform: scale(0.9);
    `;
    setTimeout(function(){
        btn_download.style.cssText=
    `
    transform: scale(1);
    `;
    },150);
    return false;
}
btn_hire_me.onclick=function(){
    audio.src="/portofolio/soound/mixkit-modern-click-box-check-1120.wav";
    btn_hire_me.style.cssText=
    `
    transform: scale(0.9);
    `;
    setTimeout(function(){
    btn_hire_me.style.cssText=
    `
    transform: scale(1);
    `;
    },150);
    return false;
}

btn3.onclick=function(){
    audio.src="/portofolio/soound/mixkit-modern-click-box-check-1120.wav";
    btn3.style.cssText=
    `
    transform: scale(0.9);
    `;
    setTimeout(function(){
    btn3.style.cssText=
    `
    transform: scale(1);
    `;
    },150);
}
// toggle style switcher
let Home=document.querySelector(".Home");
let About=document.querySelector(".About");
let Services=document.querySelector(".Services");
let Portfolio=document.querySelector(".Portfolio");
let Content=document.querySelector(".Content");
// //////////////////////////////////////////////
let home_section=document.querySelector(".home");
let about_section=document.querySelector(".about");
let services_section=document.querySelector(".services");
let portofolio_section=document.querySelector(".portofolio");
let contact_section=document.querySelector(".contact");
console.log(Home);
Home.onclick=function(){
    Home.classList.add("active");
    About.classList.remove("active");
    Services.classList.remove("active");
    Portfolio.classList.remove("active");
    Content.classList.remove("active");
    home_section.style.cssText=
    `display:block;
    transition: all 1s ease;
    `;
    about_section.style.cssText=`display:none; transition: all 1s ease;`;
    services_section.style.cssText=`display:none; transition: all 1s ease;`;
    portofolio_section.style.cssText=`display:none; transition: all 1s ease;`;
    contact_section.style.cssText=`display:none; transition: all 1s ease;`;
}; 
window.onload=function(){
    Home.classList.add("active");
    About.classList.remove("active");
    Services.classList.remove("active");
    Portfolio.classList.remove("active");
    Content.classList.remove("active");
    home_section.style.cssText=
    `display:block;
    transition: all 1s ease;
    `;
    about_section.style.cssText=`display:none; transition: all 1s ease;`;
    services_section.style.cssText=`display:none; transition: all 1s ease;`;
    portofolio_section.style.cssText=`display:none; transition: all 1s ease;`;
    contact_section.style.cssText=`display:none; transition: all 1s ease;`;
}
About.onclick=function(){
    Home.classList.remove("active");
    About.classList.add("active");
    Services.classList.remove("active");
    Portfolio.classList.remove("active");
    Content.classList.remove("active");
    home_section.style.cssText=`display:none; transition: all 1s ease;`;
    about_section.style.cssText=`display:block; transition: all 1s ease;`;
    services_section.style.cssText=`display:none; transition: all 1s ease;`;
    portofolio_section.style.cssText=`display:none; transition: all 1s ease;`;
    contact_section.style.cssText=`display:none; transition: all 1s ease;`;
}; 
Services.onclick=function(){
    Home.classList.remove("active");
    About.classList.remove("active");
    Services.classList.add("active");
    Portfolio.classList.remove("active");
    Content.classList.remove("active");
    home_section.style.cssText=`display:none; transition: all 1s ease;`;
    about_section.style.cssText=`display:none; transition: all 1s ease;`;
    services_section.style.cssText=`display:block; transition: all 1s ease;`;
    portofolio_section.style.cssText=`display:none; transition: all 1s ease;`;
    contact_section.style.cssText=`display:none; transition: all 1s ease;`;
}; 
Portfolio.onclick=function(){
    Home.classList.remove("active");
    About.classList.remove("active");
    Services.classList.remove("active");
    Portfolio.classList.add("active");
    Content.classList.remove("active");
    home_section.style.cssText=`display:none; transition: all 1s ease;`;
    about_section.style.cssText=`display:none; transition: all 1s ease;`;
    services_section.style.cssText=`display:none; transition: all 1s ease;`;
    portofolio_section.style.cssText=`display:block; transition: all 1s ease;`;
    contact_section.style.cssText=`display:none; transition: all 1s ease;`;
}; 
Content.onclick=function(){
    Home.classList.remove("active");
    About.classList.remove("active");
    Services.classList.remove("active");
    Portfolio.classList.remove("active");
    Content.classList.add("active");
    home_section.style.cssText=`display:none; transition: all 1s ease;`;
    about_section.style.cssText=`display:none; transition: all 1s ease;`;
    services_section.style.cssText=`display:none; transition: all 1s ease;`;
    portofolio_section.style.cssText=`display:none; transition: all 1s ease;`;
    contact_section.style.cssText=`display:block; transition: all 1s ease;`;
}; 
