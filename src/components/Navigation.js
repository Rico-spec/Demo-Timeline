import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar,Nav, Form } from 'react-bootstrap';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import SearchIcon from '@material-ui/icons/Search';
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded';
import PieChartRoundedIcon from '@material-ui/icons/PieChartRounded';
import ExtensionRoundedIcon from '@material-ui/icons/ExtensionRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import './Navigation.css';
import { Container, Row, Col } from 'react-bootstrap';


function navbar() {
    return (
      <>  

    <Container fluid>     
   <Row>
     <Col md={12}>
    <Navbar variant="dark" className="navbar navstyle navbar-expand-lg">
    <Navbar.Brand href="#home">N</Navbar.Brand>
    <Nav className="mr-auto ">
        
      <Nav.Link href="#channels" className="textsize"><span><AppsRoundedIcon/></span><strong> CHANNELS</strong></Nav.Link>
      <Nav.Link href="#bookmarks" className="textsize"><span><BookmarkRoundedIcon/></span><strong> BOOKMARKS</strong></Nav.Link>
      <Nav.Link href="#overview" className="textsize"><span><PieChartRoundedIcon/></span><strong> OVERVIEW</strong></Nav.Link>
      <Nav.Link href="#widgets" className="textsize"><span><ExtensionRoundedIcon/></span><strong> WIDGETS</strong></Nav.Link>
      
      </Nav>
    

  <Form inline className="textsize">
     <strong> <SearchIcon/></strong>
      <strong><AccountCircleRoundedIcon/></strong>
    </Form>
   
  </Navbar>
  </Col>
  </Row>
  </Container>
  
  
  <Container fluid>
  <Row>
    <Col>
  <Navbar>
    <Nav className="mr-auto">
      <Nav.Link href="#timeline" className="text-info pad-30">Timeline</Nav.Link>
      <Nav.Link href="#calender" className="text-info pad-30">Calender</Nav.Link>
      <Nav.Link href="#statistics" className="text-info pad-30">Statistics</Nav.Link>
    </Nav>
    
  </Navbar>
  </Col>
  </Row>
  </Container>
 
     
    </>
    );
  }
  
  export default navbar;