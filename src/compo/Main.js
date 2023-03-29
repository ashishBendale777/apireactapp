import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { Link, Route, Routes } from 'react-router-dom'
import AddEmp from '../pages/AddEmp'
import AddProd from '../pages/AddProd'
import AllEmo from '../pages/AllEmo'
import AllProd from '../pages/AllProd'


function Main() {
    return (
        <div>
            <Container fluid>
                <Row className="mcontainer">
                    <Col lg={2} className="mnav">
                        <Nav className="flex-column">
                            <Nav.Link>
                                <Link to="/" className='mlink'>Add Employee</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/all" className='mlink'>All Employee</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/addprod" className='mlink'>Add Product</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/allprod" className='mlink'>All Product</Link>
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col lg={10}>
                        <Routes>
                            <Route path="/" element={<AddEmp/>}></Route>
                            <Route path="/all" element={<AllEmo/>}></Route>
                            <Route path="/addprod" element={<AddProd/>}></Route>
                            <Route path="/allprod" element={<AllProd/>}></Route>
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Main