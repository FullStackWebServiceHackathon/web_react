import { useState } from "react";
import { Nav, Navbar,NavDropdown, Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data';	// import 를 선언하여 data.js 변수를 가져와 사용한다.

function App() {

  let [shoes] = useState(data);	// import로 받은 변수를 useState에 넣어 사용한다.

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="#home">대규의 신발가게</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">초전자탕후루실험실 아지트</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="My Info" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">장바구니</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">채팅</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">플래너</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">LOGOUT</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

	  <div className='main-bg'></div>
      <div className='container'>
        <div className='row'>
        {/* // map을 사용하여 반복적으로 data를 불러온다. */}
          {
            shoes.map(function (item, idx) {
              return (
                <Item shoes={item} key={idx} idx={idx}></Item>
              )
            })
          }
          </div>
        </div>
      </div>
  );
}

function Item(props){
  return(
    <div className='col-md-4'>
    <img src={'https://codingapple1.github.io/shop/shoes'+(props.idx+1)+'.jpg'} width="80%" />
    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.cotent}</p>
  </div>
  )
}

export default App;