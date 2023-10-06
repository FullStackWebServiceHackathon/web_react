import './App.css';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';




function App() {

  

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집','파이썬독학']);
  let [좋아요, 좋아요수정] = useState(Array(글제목.length).fill(0));
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  // function 함수(){
  //   console.log(1)
  // }

  //자주 바뀌는 html 내용 state로 저장 

  
  return (

    
    <div className ="App">

      
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">끝까지 가면 다깨</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Pick</Nav.Link>
            <NavDropdown title="My Info" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">초전토체탕후루실험실</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">지갑</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">플래너</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">톡</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className = "black-nav">
      <h4>초전도체탕후루</h4>
    </div>

    <button onClick = {()=>{
      let copy = [...글제목];
      copy.sort();
      글제목변경(copy);
    }}>가나다순 정렬</button>

      {/*map함수로 html 반복생성*/}

      {
        글제목.map(function(a, i){
        return(
        <div className="list" key={i}>
        <h4 onClick={()=>{setModal(!modal); setTitle(i)}}>
          { 글제목[i]}
          </h4>
          <span onClick={()=>{
            let copy = [...좋아요];
            copy[i] = copy[i]+1;          
            좋아요수정(copy)}}>👍</span>{ 좋아요[i] }
        <p>2월 17일 발행</p>

        <button onClick={()=>{
          let copy = [...글제목];
          copy.splice(i,1);
          글제목변경(copy);
          }}>글삭제</button>
        </div>
        )
      })

      }

      <div>
      <input onChange={(e)=>{(입력값변경(e.target.value))}}/>
      <button onClick={()=>{
        let copy =[...글제목];
        copy.unshift(입력값); //array 자료 맨 앞에 추가하는 문법 
        글제목변경(copy) //그 후에 state변경 함수 생성
      }}>글발행</button>
      </div>


      {
      modal == true ? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목}/> : null
      //modal 상태가 true일때만 실행
      }
    </div>
    

  );

}


function Modal(props){//component

  return (
  <div className = "modal" style={{background : props.color}}>
  <h4>{props.글제목[props.title]}</h4>
  <p>날짜</p>
  <p>상세내용</p>

  <button onClick={()=>{
      let copy = [...props.글제목];
      copy[props.title] = '여자코트 추천';
      props.글제목변경(copy);
  }}>글수정</button>

  </div>
  )
  }

    

export default App;
