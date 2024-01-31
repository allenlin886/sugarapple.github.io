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

// 獲取分享按鈕元素
const shareButton = document.querySelector('.share-button');
// 監聽點擊事件
shareButton.addEventListener('click', function(event) {
    event.preventDefault(); // 防止默認行為（跳轉到 #）
    // 檢查瀏覽器是否支持分享功能
    if (navigator.share) {
        // 執行分享操作
        navigator.share({
            title: '分享標題',
            text: '分享內容',
            url: '分享連結'
        }).then(() => {
            console.log('分享成功');
        }).catch((error) => {
            console.error('分享失敗', error);
        });
    } else {
        console.log('瀏覽器不支持分享功能');
    }
});