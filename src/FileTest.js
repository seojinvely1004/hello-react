import React from "react";

function A(){
    const i = 10;
    //반복문 조건문 실행문장
    return (<div><h1> A함수구조로 정의된 컴포넌트입니다</h1></div>);
}
const B= ()=>{
    return (<div><h1>B 화살표 함수구조로 정의된 컴포넌트입니다</h1></div>);
}

class C extends React.Component{//함수가 아닌 클래스이다. 변수나 함수=메서드 정의를 해줄 수 있고,  마지막에 return만 해줘도 된다. 
    //상속 자동 포함 메소드 재정의- render() - 화면 렌더링시 호출.요소 정의 : 매개변수가 없는 형태 
    //상속 자동 포함 메소드 재정의 - constructor(props) - <C />생성될 때 호출.초기변수 정의 :매개변수가 있음
    //즉, C 컴포넌트에는 render메서드와 constructor함수가들어가있다.
    //constructor가 먼저 정의되고, render가 두번째에 호출된다. 
    render(){
        return (<div><h1>C 클래스구조로 정의된 컴포넌트입니다.</h1></div>)
    }
}

export default A;
export {B};
export {C};