import React from 'react'
import { Row, Col } from 'react-bootstrap';


const Header = () => {
  return (
    <Row>
    <Col sm='12' className='d-flex justify-content-center py-3'>
    <div className='text-center fs-3'>قائمة الطعام
    <p className='line'></p>
    </div>
    </Col>
    </Row>
  )
}

export default Header;