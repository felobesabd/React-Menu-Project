import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const CardContent = ({info}) => {
  return (
    <Row>
    {
        info.length >= 1 ? (info.map((item)=>{
            return (
                    <Col sm='12' className='mb-3' key={item.id}>
                        <Card className='d-flex flex-row'>
                        <Card.Img variant="top" className='image-food' src={item.imgUrl} />
                        <Card.Body>
                        <Card.Title>
                        <div className='d-flex justify-content-between'>
                        <div className='fs-4 fw-bold'>{item.title}</div>
                        <div className='fw-bold' style={{color:'#B45B35'}}>{item.price}</div>
                        </div>
                        </Card.Title>
                        <Card.Text className='py-2'>
                        <div style={{color:'#777'}}>{item.description}</div>
                        </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
            )
        })) : (<h1 className='text-center'>لا يوجد اصناف</h1>)
    }
    </Row>
  )
}

export default CardContent;