import React from "react";
class BoardHeading extends React.Component{
    //게시물 테이블 제목행 구성
    //번호 제목 작성사 조회수 > 제목행을 만든다.
}
class Board extends React.Component{
    //BoardList 내부에 게시물 5개라는 배열. 테이블 내부에 출력
    //화면에 테이블 태그로 보이도록 출력만 먼저 할 것.
    //단, 출력시 viewcount의 값은 보여줄 때마다 1 증가하도록(조회수)

    //반복문 들어가야하고 현재값부터 조회수 증가하도록    
    //props로 배열을 받아야한다. 

}
class BoardList extends React.Component{
    constructor(props){
        super(props);
        /*[
            {seq : 1, title : '제목1', writer : "작성자1", viewcount : 1},
            {seq : 2, title : '제목2', writer : "작성자2", viewcount : 10},
            {seq : 3, title : '제목3', writer : "작성자3", viewcount : 5},
            {seq : 4, title : '제목4', writer : "작성자4", viewcount : 123},
            {seq : 5, title : '제목5', writer : "작성자5", viewcount : 0},

        ]*/
    }

    render(){
    return (
        <div>
            <table border="3">
                <BoardHeading />
                <Board />
            </table>
            
        </div>

    );
}
}