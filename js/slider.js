const container = document.querySelector('.tn-container');
const leftBtn = document.querySelector('.tn-btn-l');
const rightBtn = document.querySelector('.tn-btn-r');

const info = document.querySelector('.tk-info');
const nama = info.querySelector('.tk-nama');
const npm = info.querySelector('.tk-npm');
const quotes = info.querySelector('.tk-quotes');

const sosmed = document.querySelector(".tk-sosmed");
const ig = sosmed.querySelector('.tk-sosmed-ig');
const fb = sosmed.querySelector('.tk-sosmed-fb');
const wa = sosmed.querySelector('.tk-sosmed-wa');

console.log(nama)

const us = [
    ["M Gibran Fajar", "247006111181", "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, iure quam et sunt non at dignissimos nam.\"","","","0851-7160-6969"],
    ["Muhammad Rezza", "247006111182", "\"Apa ajalah yang penting beres gw mah\"","https://www.facebook.com/muhammad.rezza.58726/","https://www.instagram.com/rezzaree_/","0851-7160-1665"],
    ["Sammi Zaki Fadillah", "247006111191", "\" Porro fugiat magni dolor itaque reprehenderit, optio consequatur delectus eveniet omnis alias, minus quae. Quas.\"","","","0838-6328-3662"]
]

function change(){
    const kotak = document.querySelectorAll(".kotak-foto")[1];
    const img = kotak.querySelector('img').getAttribute('src')
    const no =  img.match(/\d+/)[0] - 1;
    
    nama.innerHTML = us[no][0];
    npm.innerHTML = us[no][1];
    quotes.innerHTML = us[no][2];
    fb.setAttribute('src', us[no][3]);
    ig.setAttribute('src', us[no][4]);
    wa.innerHTML = us[no][5];
    


}

function left(){

    let kotakFotoList = document.querySelectorAll('.tn-container .kotak-foto');
    kotakFotoList[1].classList.remove("middle");
    
    const firstChild = container.firstElementChild;
    container.removeChild(container.firstElementChild)
    container.appendChild(firstChild)
    
    kotakFotoList = document.querySelectorAll('.tn-container .kotak-foto');
    
    kotakFotoList[1].classList.add("middle");

    change()
}


function right(){
    
    let kotakFotoList = document.querySelectorAll('.tn-container .kotak-foto');
    kotakFotoList[1].classList.remove("middle");
    
    const firstChild = container.lastElementChild;
    container.removeChild(container.lastElementChild);
    
    container.insertBefore(firstChild, container.firstElementChild);
    
    kotakFotoList = document.querySelectorAll('.tn-container .kotak-foto');
    
    kotakFotoList[1].classList.add("middle");

    change()
}


    rightBtn.addEventListener("click", function (){
        right();
    })

    leftBtn.addEventListener("click", function (){
        left();
    })

    setInterval(left, 5000);
    

