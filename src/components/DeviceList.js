import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import { Row } from 'react-bootstrap';
import DeviceItem from './DeviceItem';

const DeviceList = observer(() =>{
    const {device} = useContext(Context)
    return(
        <div className='d-flex'>
            <Row>
                {device.devices.map(device =>
                    <DeviceItem key={device.id} device={device}/>
                )}
            </Row>
        </div>

    )
})

export default DeviceList