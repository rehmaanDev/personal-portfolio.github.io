let i = 0;
let txt = 'Computer Science Undergrad at DTU and an Enthusiastic Problem Solver'; /* The text */
let para = document.querySelector('.typing');
function typeWriter() {
    if (i < txt.length) {
        para.innerHTML += txt.charAt(i++);
        setTimeout(typeWriter, 50);
    }
    else{
        setTimeout(typeWriter2, 200);
    } 
}

function typeWriter2() {
    if(i > 0){
        para.innerHTML = para.innerHTML.slice(0, -1);
        setTimeout(typeWriter2, 50);
        i--;
    }
    else setTimeout(typeWriter, 200);
}

typeWriter();

let arr = document.getElementsByTagName('section');
let header = document.querySelector('.header');
let header_items = document.querySelector('ul').children;
console.log(header_items);


let home = document.querySelector('.home');
window.onload = function () {
    home.classList.remove('hidden');
    header.classList.add('hidden');
}

let a = ['home', 'about', 'education', 'projects', 'skills', 'resume', 'contact'];
let home_nav_items = document.querySelector('.nav').children;
// home se baaki jaagh jaane ka codee
for(let i=0;  i< home_nav_items.length; i++) {
    let btn = home_nav_items[i];
    btn.addEventListener('click', function () {
        if(i==0 || i==5) return;
        home.classList.add('hidden');
        document.querySelector(`.${a[i]}`).classList.remove('hidden');
        header.classList.remove('hidden');
        header_items[i].children[0].classList.add('active');
        for(let j=0; j < 7; j++) if(i!=j) header_items[j].children[0].classList.remove('active');
    });
}

// baaki jagah se navigate krne ka code 
for(let i=0;  i<7; i++) {
    let btn = header_items[i];
    btn.addEventListener('click', function() {
        if(i == 0) {
            // go to home
            for(let j=0;  j<7; j++) {
                if(j!=5 && document.querySelector(`.${a[j]}`).classList.contains('hidden') == false) {
                    document.querySelector(`.${a[j]}`).classList.add('hidden');
                    header_items[j].children[0].classList.remove('active');
                    break;
                }
            }
            header.classList.add('hidden');
            home.classList.remove('hidden');
        }
        else if(i==5) {
            return; // resume hai
        }
        else{
            for(let j=0;  j<7; j++) {
                if(j!=5 && document.querySelector(`.${a[j]}`).classList.contains('hidden') == false) {
                    document.querySelector(`.${a[j]}`).classList.add('hidden');
                    header_items[j].children[0].classList.remove('active');
                    break;
                }
            }
            document.querySelector(`.${a[i]}`).classList.remove('hidden');
            header_items[i].children[0].classList.add('active');
        }
    });
}

