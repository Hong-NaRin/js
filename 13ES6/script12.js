//export default - 파일전체에서 단 한개만 내보낼때

let result = 0;
const add = (x) => {
    result += x;
    return result; 
}

//export default add; //마지막에 이 파일을 대표하는 구문을 하나 내보냄
export default {result, add}


