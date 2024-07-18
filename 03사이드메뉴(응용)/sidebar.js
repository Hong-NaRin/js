// window.onload = function() { // 마지막에 js실행시키는 두번째 방법}
// 화면에서 한 개만 사용할 수 있음
// }

var menu = document.querySelector(".menuBtn");
var side = document.querySelector(".sidenav");

menu.addEventListener('click', function() {
    // 클릭할 때마다 sidenav의 너비를 확인
    var w = side.style.width       
    // if(w == '' || w == '0px') {
    //     side.style.width = '200px';
    // }
    // else {
    //     side.style.width = '0px';
    // }

    // 모바일, pc 둘 다 적용
    if(window.innerWidth <= 767) { // 브라우저 너비 767이하일 때
        if(w == '' || w == '0px') {
            side.style.width = '200px';
        }
        else {
            side.style.width = '0px';
        }    
    }
    else { // 브라우저 너비가 767초과일 때
        if(w == '0px') { // 공백일 때는 제외하고
            side.style.width = '200px';
        }
        else {
            side.style.width = '0px';
        }
    }
})