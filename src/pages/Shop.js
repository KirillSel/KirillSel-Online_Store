import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';

const Shop = () =>{
    return(
        <div className='mt-3'>
            <Container>
                <Row>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Shop;