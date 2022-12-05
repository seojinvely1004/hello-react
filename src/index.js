import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

{/*import ConstructorTest from './ConstructorTest';*/}
{/*import Book from './Book';*/}
import EventComponent1 from './EventComponent';
import EventComponent2 from './EventComponent2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    

    {/*<ConstructorTest writer="작성자"/>*/}
    {/* <Book title="리액트" body="리액트이야기를 재미나게 풀어봅니다" price="30000"/> 
    <Book title="스프링" body="mvc는 물론 부트까지도 다룹니다" price="40000"/> 
    <Book title="마리아db" body="오라클 mysql mariadb비교하여 설명합니다" price="25000"/>  */}
   {/*<EventComponent1 name = "리액트이벤트처리" />*/}
   <EventComponent2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
