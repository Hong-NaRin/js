
/*
모듈은 ES6에서 미리작성한 클래스 파일이고
변수, 함수, 클래스 등이 포함됩니다.

모듈을 외부로 내보낼때는 
name export방식 - 여러값을 내보낼때, 
default export방식 - 하나씩 내보낼때
*/

//named export
export const name = "홍길동";
export const age = 20;

export let info = () => {
    console.log(name, age);
}

let x = 10;
let y = 1;

let add = () => x + y;

export {x, y, add}




