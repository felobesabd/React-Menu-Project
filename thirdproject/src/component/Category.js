import React from 'react'
import { Col, Row } from 'react-bootstrap';
const Category = ({filtring, notRepeat}) => {
    const setValFiltring = (categoryVal) => {
        filtring(categoryVal)
    }
  return (
    <Row className='my-2 mb-5'>
    <Col sm='12' className='d-flex justify-content-center'>
    {
        notRepeat.length >= 1 ? (notRepeat.map((e) => {
            return (
                <div key={Math.random()}> 
                    <button onClick={ ()=> setValFiltring(e)} className='btn-category mx-2'>{e}</button>
                </div>
            )
        })) : (<h2>لا يوجد اصناف</h2>)
    }
    </Col>
    </Row>
  )
}

export default Category;