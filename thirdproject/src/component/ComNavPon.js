import React from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';

const ComNavPon = ({clickSearch}) => {
  const [search, setSearch] = useState('')
  const searchValue = () => {
    clickSearch(search)
    setSearch('')
  }
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
        <Container>
        <Navbar.Brand href="#">
        <div className='brand-color'>مطعم جديد</div>
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="ابحث..."
                className="mx-2"
                onChange={(e)=> setSearch(e.target.value)}
                value={search}
              />
              <button onClick={(e)=> {
                e.preventDefault()
                searchValue()
              }} className='btn-search'>بحث</button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default ComNavPon;