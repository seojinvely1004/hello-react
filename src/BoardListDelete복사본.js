import React from "react";
class BoardHeading extends React.Component{
    //게시물 테이블 제목행 구성
    //번호 제목 작성사 조회수 > 제목행을 만든다.
    render() {
                return (
                    <thead><tr><th>번호</th><th>제목</th><th>작성자</th><th>조회수</th>
                    <th colSpan="2">추가동작</th></tr></thead>      
                );
            };
    }
class Board extends React.Component{
    render() {               
        const deleteHandler = (e) =>{
            //삭제버튼 클릭한 게시물을 게시물 리스트에서 삭제 - 화면 렌더링
            this.props.deleteBoard(e.target.id); //deleteBoard있으면 삭제할id를주겠다.
            //배열에서 몇번째 게시물을 삭제하는지 
        }

        const board_tr = this.props.body.map(function(oneboard, index) {
            return (<tr key={index}><td>{oneboard.seq}</td><td>{oneboard.title}</td>
            <td>{oneboard.writer}</td><td>{++oneboard.viewcount}</td>
            <td><button id={index} onClick={deleteHandler}>삭제</button></td><td><button>수정</button></td></tr>);
        });    

        return(
            <tbody>{board_tr}</tbody>
        );
    }
}

    //제목: 입력창, 작성자 : 입력창// 글추가 버튼
    //제목입력값, 작성자입력값을 전달받아서 글추가버튼 클릭시
    //번호 : 게시물리스트 갯수 + 1로 구현
    //조회수 : 0 (글작성하는것이니까)
    //게시물 1개 객체 생성
    //props.addBoard(게시물 1개 객체 전달)
class BoardInsertForm extends React.Component{
    state = {title : '', writer : '', seq : this.props.size +1, viewcount : 0};
  
    render(){
        const changeHandler = (e)=>{
            this.setState({ [e.target.id] : e.target.value});
        }
        const insertHandler = ()=>{
            this.setState({seq : this.state.seq +1})
            this.props.addBoard({seq: this.state.seq, title: this.state.title,
            writer:this.state.writer, viewcount :this.state.viewcount });
        }

        return(
            <div>
            제목입력:<input type="text" id="title" onChange={changeHandler}/>
            작성자입력:<input type="text" id="writer" onChange={changeHandler}/>
            <button onClick = {insertHandler}>글추가버튼</button>
            </div>
        );    
    }
}

class BoardList extends React.Component{
    constructor(props){
        super(props);
        this.state = {boardList : [      
            {seq : 1, title : '제목1', writer : "작성자1", viewcount : 1},
            {seq : 2, title : '제목2', writer : "작성자2", viewcount : 10},
            {seq : 3, title : '제목3', writer : "작성자3", viewcount : 5},
            {seq : 4, title : '제목4', writer : "작성자4", viewcount : 123},
            {seq : 5, title : '제목5', writer : "작성자5", viewcount : 0},
        ]};
    }//constructor

    render(){
         //addBoard 구현
         //1. 입력된 게시물 1개 전달
         //2. 1번 전달 게시물을 게시물리스트 추가 
         //3. state 게시물 리스트값 변경

        const addBoard = (newBoard)=>{//1.
            this.state.boardList.push(newBoard);//2.
            this.setState({boardList : this.state.boardList});//3.
        }

        //Board의 this.props.deleteBoard(e.target.id); 
        const deleteBoard = (index)=>{
            //추가 : push, 반복 : map, 삭제 : filter, splice,,
            this.state.boardList.splice(index, 1);//배열갯수변화
            this.setState({boardList : this.state.boardList});//렌더링되도록 변경된 값 알려주기

        }

    return (
        <div>
            <table border="3">
                <BoardHeading />
                <Board body = {this.state.boardList} deleteBoard = {deleteBoard}/>
            </table>
            <br/><br/>
            <BoardInsertForm size = {this.state.boardList.length}addBoard={addBoard}/>
        </div>
    );
    }
}
export default BoardList;
