import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css"
import logo from "./../../img/pngwing.com (1).png";
import { Link} from "react-router-dom";
import bag from "./../../img/big-handbag.png";
import { AppContext } from "../../App";
const Header=()=>{  
  const{count} =useContext(AppContext);
    return(
        <Navbar fixed="top" className="bg-body-tertiary shadow">
      <Container>
        <Link className="link" to="/"><img src={logo} style={{width:32}}/></Link>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Link className="link" to="/" href="#home">Home</Link>
            <Link className="link" to="/products" href="#link">products</Link>
            <Link className="link" to="/cart" href="#link"><img src={bag}/><span className="number">{count}</span></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    )
}
export default Header
