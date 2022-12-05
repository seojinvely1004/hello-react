import React from "react";
class BookHeading extends React.Component {
    
    render(){
        return (<h1>제목 = {this.props.title}</h1>)
    }

}
class BookBody extends React.Component {
    constructor(props){
        super(props);
        this.body = "내용 = " + this.props.body;
        this.price = "가격 = " +this.props.price + "원";
    }
    render(){
        return (
            <div>
                <hr/>
                <h2>{this.body}</h2>
                <h2>{this.price}</h2>
                <hr/>
            </div>
        );
    }

}
class Book extends React.Component{    
    //this.props.title / this.props.body / this.props.price
    
    render(){//render라는 함수 내부
       
        
        return (<div>
            <BookHeading title={this.props.title} />
            <BookBody price={this.props.price*2} body={this.props.body} />
            </div>);
    }
}
export default Book;

/*오늘 구입한 책목록
제목 =리액트
내용=리액트이야기를 재미나게 풀어봅니다
가격=30000*/