import React, { Fragment } from 'react'
import { Row, Col, Radio as AntRadio, Form } from 'antd'
import { StyledLabel } from './style'

export const Radio = ({ name, label, require, value, onChange, message }) => {
    return (
        <Fragment>
            <Row>
                <Col style={{ padding: '0 5px' }}>
                    <StyledLabel>{`${label}:`}</StyledLabel>
                    {require && <StyledLabel color='red'>{`*`}</StyledLabel>}
                </Col>
                <Col style={{ padding: '0 5px' }}>
                    <Form.Item name={name} rules={[{ required: require, message: message }]}>
                        <AntRadio.Group onChange={onChange} value={value} >
                            <AntRadio value='Male'>Male</AntRadio>
                            <AntRadio value='Female'>Female</AntRadio>
                            <AntRadio value='Unsex'>Unsex</AntRadio>
                        </AntRadio.Group>
                    </Form.Item>
                </Col>
            </Row>
        </Fragment>
    )
}