import React from "react";

class EventComponent1 extends React.Component{
    //state.value = 0;
    //state객체와 setState함수 자동포함(무슨역할)/재정의
    state = {value : 0, name : this.props.name };//state는 객체다{} , value를 준다. value값이 바뀔 때마다 상태가 변경된다.
    //clickHandler(){ /*클래스 메소드 + 유명함수 > this가 계속 변경된다. 화살표함수를 쓰자!!*/ }
    //clickHandler = ()=>{ /*클래스 메소드 + 화살표함수 */ }
    clickHandler = ()=> {
        /*렌더함수 지역함수 + 화살표함수 */
        this.setState( {value : this.state.value + 1, name : '이벤트처리중'} );
    }
    render(){
        
        return(
            <div>
                <div><h1>{this.state.value}-{this.state.name}</h1></div>
                <button onClick={this.clickHandler } >클릭버튼</button>
                <div><h1>전달받은name={this.state.name}</h1></div>
            </div>
        );//return
    }//render
}//class

export default EventComponent1;