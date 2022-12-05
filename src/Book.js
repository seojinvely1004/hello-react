import React from "react";



class Book extends React.Component{    
    
    constructor(props){ //생성자내부
        super(props);
        this.title = "제목 = "+props.title;
    }
    render(){//render라는 함수 내부
        const body = "내용 = "+this.props.body;
        const price = "가격 = "+this.props.price + "원";
        
        return (<div>
            <h1>{this.title}</h1>
            <h1>{body}</h1>
            <h1>{price}</h1>
            </div>);

    }
}
export default Book;

/*오늘 구입한 책목록
제목 =리액트
내용=리액트이야기를 재미나게 풀어봅니다
가격=30000*/