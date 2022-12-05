import { useState } from "react";

function EventComponent2(p){
//state객체 변수와 setState함수 없다.
//value=0;
//setValue(1)
//useState 라이브러리 호출
    const [value , setValue] = useState(0); //밸류값을 바꾸는 용도로 setValue를 쓴다. 
    const [name , setName] = useState(p.name);
    const clickHandler= ()=>{
        setValue(value+1);
        setName("이벤트 처리중");
    }
    //value = 0; //표현 . state 
    //setValue(1)
    //this.setState({value:xxxx})

    return(
        <div>
            <div><h1>{value} - {name}</h1></div>
            <button onClick={this.clickHandler } >클릭버튼</button>
            <div><h1>전달받은name = {p.name}</h1></div>
        </div>
    );//return

}

export default EventComponent2;