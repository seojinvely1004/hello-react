import React from "react";
class Loop extends React.Component{
    constructor(props){
        super(props);
        this.userList = 
        [{id: 'sba1', pw:'sba1', name: '길동', age:20},
        {id: 'sba2', pw:'sba2', name: '영희', age:30},
        {id: 'sba3', pw:'sba3', name: '주디', age:35},
        {id: 'sba4', pw:'sba4', name: '포비', age:25},
        {id: 'sba5', pw:'sba5', name: '크롱', age:22}];
    }//constructor
    render(){
        const loop = this.userList.map( 
            (oneUser, index)=> {
                return (
                <li key={index}>{oneUser.id} : {oneUser.name} : {oneUser.age} </li>
                );
            });//loop end

            return (<ol>{loop}</ol>)
    }//render
}//Loop class

class UserInform extends React.Component{
    render(){
        return (
            <div>
                <h1>아이디입력 <input type="text" id="id" name="id" placeholder="아이디 입력" onChange={this.changeHandler} /></h1>
                <h1>압호 입력 <input type="password" id="pw" name="pw" placeholder="암호 입력" onChange={this.changeHandler} /></h1>
                <h1>이름입력 <input type="text" id="name" name="name" placeholder="이름 입력" onChange={this.changeHandler} /></h1>
                <h1>나이 입력 <input type="password" id="age" name="age" placeholder="나이 입력" onChange={this.changeHandler} /></h1>
                
                <button id="userinsertbtn" onClick = {this.loginHandler} >회원가입버튼버튼</button>
                {/* <h1>로그인 아이디와 암호 입력 결과 - {this.state.idresult} , {this.state.pwresult} </h1> */}
            </div>);
    }//render
}//UserInform class

class TotalUserInform extends React.Component{
    render(){
        return (<div>
            <UserInform />
            <Loop />
        </div>);
    }//render
}//TotalUserInform class
export default Loop;
export {TotalUserInform};
