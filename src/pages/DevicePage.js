import React from 'react';
import { Container, Col, Image, Row, Card, Button } from 'react-bootstrap';
import bigStar from '../assets/bigStar.jpg'

const DevicePage = () => {
    const device = {id: 1, name: 'Iphone 12 pro', price: 30000, rating: '10/10', img: 'https://images.unsplash.com/photo-1620555576588-a7dd6c04c55d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80'}
    const description =[
        {id:1, title: 'Оперативная память', description: '5 гб'},
        {id:2, title: 'Камера', description: '12 мп'},
        {id:3, title: 'Процессор', description: 'Пентиум 3'},
        {id:4, title: 'Количество ядер', description: '2'},
        {id:5, title: 'Аккумулятор', description: '4000'}
    ]
    return(
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} heigth={200} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row>
                        <div className='d-flex flex-column align-items-center'>
                            <h2>{device.name}</h2>
                            <div className='d-flex justify-content-center align-items-center' style={{backgroundImage: 'url(${bigStar}) no-repeat center center', width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}>
                                {device.rating}
                            </div>
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className='d-flex flex-column  align-items-center justify-content-around' style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}>
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={'outline-dark'}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h1>Характеристики</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgrey' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>    
                )}
            </Row>
        </Container>
    )
}

export default DevicePage;