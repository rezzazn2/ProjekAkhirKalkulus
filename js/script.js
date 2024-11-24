
const navbar = document.querySelector('nav');
const navListChildren = document.querySelectorAll(".nav-list")[0].children;

// Fungsi untuk mengatur kelas aktif pada elemen navList
const setActiveNav = (index) => {
    // Hapus semua kelas "nav-active" dari semua elemen
    for (let i = 0; i < navListChildren.length; i++) {
        navListChildren[i].classList.remove("nav-active");
    }
    // Tambahkan kelas "nav-active" pada elemen dengan index tertentu
    navListChildren[index].classList.add("nav-active");
};

// nav respon
const bars = document.getElementById('bars');
const navKeluar = document.getElementById('nav-keluar');
const navList = document.querySelector(".nav-list");
bars.addEventListener('click', () => {  
    navList.style.right = "0";
});
navKeluar.addEventListener('click', () => {  
    navList.style.right = "100%";
});


window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Tambahkan kelas "scrolled" ke navbar jika scrollY > 0
    if (scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    if (scrollY >= 1 && scrollY <= 500) {
        setActiveNav(0);
    } else if (scrollY >= 501 && scrollY <= 1100) {
        setActiveNav(1);
    } else if (scrollY >= 1101 && scrollY <= 2000) {
        setActiveNav(2);
    } else if (scrollY >= 2001 && scrollY <= 2700) {
        setActiveNav(3);
    } else if (scrollY >= 2701) {
        setActiveNav(4);
    }
});
