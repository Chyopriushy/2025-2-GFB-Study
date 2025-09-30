/* esLint-disable*/

import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import './react.svg';
import './App.css'; // css 파일 쓰고 싶을 때





function App() {

    let post = '역삼 우동 맛집';
    let [글제목] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);

    let [logo] = useState('ReactBlog');
    // state는 변동 시 자동으로 html에 반영되게 만들고 싶으면 html 쓴다.
    // state2 > state 변경용 함수

    // Let a = num[0];
    // Let b = num[1];

    let [따봉, 따봉변경] = useState(0);

    function 함수(){
        console.log(1);
    }



    return (
        <div className = "App">
            <div className = "black-nav">
              <h4 style = {{color : 'red', fontSize : '16px'}}>{logo}</h4>
            </div>
            <div className = "list">
                <h4>{ 글제목[0] } <span onClick={() => {따봉변경(따봉 + 1)}}>👍</span> {따봉} </h4>
                <p>2월 17일 발행</p>
            </div>
            <div className = "list">
                <h4>{ 글제목[1] }</h4>
                <p>2월 17일 발행</p>
            </div>




            <div className = "list">
                <h4>{ 글제목[2] }</h4>
                <p>2월 17일 발행</p>
            </div>
        </div>


    );
}

export default App;
