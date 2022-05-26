import {useRef} from 'react';


const Ex82useRef = () => {
    const span =useRef(null)

    const change = () => {
        span.current.style.color = "green"; // 글자 색 green
        span.current.style.fontSize = "30px"; // 글자 크기는 30픽셀
        span.current.style.display = "block"; // 블록 박스로 변경
        span.current.style.width = "6em"; // 박스의 폭. 6 글자 크기
        span.current.style.border = "3px dotted magenta"; // 3픽셀 점선 magenta 테두리
        span.current.style.margin = "20px"; // 상하좌우 여백 20px
        span.current.style.innerText = "Text has changed";
    }

    return(
        <div>
            <h3>CSS 스타일 동적 변경</h3>
            <hr/>
            <p style={{color: "blue"}}>이것은
            <span ref={span} style={{color:"red"}}>문장입니다.</span>
            </p>
            <input type="button" value="스타일변경" onClick={change}></input>
        </div>
    );
}

export default Ex82useRef;