// first page functions
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const closeBtn = document.getElementById('close')

if(bar){
    bar.addEventListener('click',function(){
        nav.classList.add('active')
    })
}
if(bar){
    closeBtn.addEventListener('click',function(){
        nav.classList.remove('active')
    })
}

// Product details functions

var MainImg = document.getElementById('MainImg')
var smallImg = document.querySelectorAll(".small-img")


for(let i = 0; i < smallImg.length; i++){
    smallImg[i].onclick =function(){
        MainImg.src = smallImg[i].src
    };
}

// selecting product from featured products

var item = document.querySelectorAll('.pro-container img')

for(let i = 0 ; i < item.length ; i++){
    item[i].onclick=function(){
        MainImg.src = item[i].src
    }
}



