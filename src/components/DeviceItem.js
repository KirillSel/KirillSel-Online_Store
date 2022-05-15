import React from 'react';
import { Col, Card, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    
    return(
        <Col md={3} className='mt-3' onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
                <Image width={150} heigth={150} src={device.img}/>
                <div className='d-flex mt-1 text-black-50 align-items-center justify-content-between'>
                    <div>Samsung</div>
                    <div>
                        <div>{device.rating}</div>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>

    )
}

export default DeviceItem