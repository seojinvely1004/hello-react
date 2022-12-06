import React from "react";
class Loop extends React.Component{
    
    render(){
        const loop = this.props.userList.map( 
            (oneUser, index)=> {
                return (
                <li key={index}>{oneUser.id} : {oneUser.name} : {oneUser.age} </li>
                );
            });//loop end

            return (<ul>{loop}</ul>)
    }//render
}//Loop class

class UserInform extends React.Component{
    constructor(props){
        super(props);
        this.state = {id : '', pw: '', name : '', age : 0};
    }
    changeHandler=(ev)=>{
        if(ev.target.id == "id") this.setState({id : ev.target.value});
        if(ev.target.id == "pw") this.setState({pw : ev.target.value});
        if(ev.target.id == "name") this.setState({name : ev.target.value});
        if(ev.target.id == "age") this.setState({age : ev.target.value});
    }
    addUserHandler=()=>{
        //{id:'sba6', pw:'sba6', name:'길동6', age:6}라고 사용자가 입력했다면 
        //프로퍼티 전달 addUser 함수 전달
        this.props.addUser({id:this.state.id, pw:this.state.pw, name:this.state.name, age:this.state.age}); 
    }
    render(){
        return (
            <div>
                <h1>아이디입력 <input type="text" id="id" name="id" placeholder="아이디 입력" onChange={this.changeHandler} /></h1>
                <h1>압호 입력 <input type="password" id="pw" name="pw" placeholder="암호 입력" onChange={this.changeHandler} /></h1>
                <h1>이름입력 <input type="text" id="name" name="name" placeholder="이름 입력" onChange={this.changeHandler} /></h1>
                <h1>나이 입력 <input type="password" id="age" name="age" placeholder="나이 입력" onChange={this.changeHandler} /></h1>
                
                <button id="userinsertbtn" onClick = {this.addUserHandler} >회원가입버튼버튼</button>
                {/* <h1>로그인 아이디와 암호 입력 결과 - {this.state.idresult} , {this.state.pwresult} </h1> */}
            </div>);
    }//render
}//UserInform class

class TotalUserInform extends React.Component{
    constructor(props){
        super(props);
        this.state = {userList :  //render메소드 사용가능. 변수값 변경 가능. 화면 리렌더링x
        [{id: 'sba1', pw:'sba1', name: '길동', age:20},
        {id: 'sba2', pw:'sba2', name: '영희', age:30},
        {id: 'sba3', pw:'sba3', name: '주디', age:35},
        {id: 'sba4', pw:'sba4', name: '포비', age:25},
        {id: 'sba5', pw:'sba5', name: '크롱', age:22}]
        };
    }//constructor
    //userList 변경 가능. 변경시 화면 리렌더링
    //userList 수정가능 this.setState(userList);

    render(){
        const addUser = (oneUser)=>{
            this.state.userList.push(oneUser);//갯수 변경
            this.setState({userList : this.state.userList});
         }
        
        return (<div>
            <UserInform addUser = {addUser}/>
            <Loop userList = {this.state.userList}/>
            {/*Loop 내부 this.props.userList 출력 (읽기전용)*/}
            </div>);
    }//render
}//TotalUserInform class
export default Loop;
export {TotalUserInform};
