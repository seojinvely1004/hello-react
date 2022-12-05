import React from "react";
class ConstructorTest extends React.Component{
    title = "제목";//현재 객체의 모든 함수에서 사용
    //<ConstructorTest writer="작성자" />
    constructor(props){//this (현재 자신의 객체),호출 다른 외부파일에서 전달 저장 용소 변수=객체
    //props.writer
    //props = {writer:"작성자"....}
        super(props);//부모의 생성자 호출, 현재객체를 호출하려면 부모를 먼저 호출해야한다. 
        console.log("생성자함수호출");
        this.contents="내용";
        //this.writer= 호출 다른 외부파일에서 전달받자;
        //this.list = {a:100, b:"비"} 객체선언가능
        //this.list2 = [1,2,3,4] 배열선언가능
        

    }
    render(){
        console.log("2렌더함수호출");
        return (<div>{this.title}-{this.contents}-{this.props.writer}</div>);

    }
}
export default ConstructorTest;