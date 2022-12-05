import React from "react";
class LoginForm extends React.Component{
    state={}
    constructor(props){
        super(props);
        this.state={id : "아직 입력전" , pw: "아직 설정전" , idresult : "", pwresult : ""} //지역변수아니야 전역변수야.
    }
    changeHandler = (e) =>{
        //아이디입력중 발생 e.target.value
        //암호입력중 발생 e.target.value
        //this.setState({id : e.target.value , pw: e.target.value});
        if(e.target.id == 'id') this.setState({id : e.target.value});
        else if(e.target.id == 'pw') this.setState({pw : e.target.value});

    }
    loginHandler = (e) =>{
        //alert( e.target.innerHTML);
        this.setState({idresult : this.state.id, pwresult : this.state.pw})

    }
    render(){
        return (
            <div>
                <h1>아이디입력 <input type="text" id="id" name="id" placeholder="아이디 입력" onChange={this.changeHandler} /></h1>
                <h1>압호 입력 <input type="password" id="pw" name="pw" placeholder="암호 입력" onChange={this.changeHandler} /></h1>
                <button id="loginbtn" onClick = {this.loginHandler} >로그인버튼</button>
                <h1>로그인 아이디와 암호 입력 결과 - {this.state.idresult} , {this.state.pwresult} </h1>
            </div>);
    }
}
export default LoginForm;