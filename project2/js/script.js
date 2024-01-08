let menu=document.querySelector("#menu-bar");
let navbar=document.querySelector(".navbar");

//按下按鈕之後產生的變化

menu.onclick =() =>{//toggle為轉換
    menu.classList.toggle('fa-times');//按下後變這個叉叉圖示(font awesome裡的)
    navbar.classList.toggle('active');//並加css裡的active進去
}

//回到上層按鈕

window.onscroll=()=>{

    if(window.scrollY>60){
        document.querySelector('#scroll-up').classList.add('active');
    } else {
        document.querySelector('#scroll-up').classList.remove('active');
    }


}