import React, { Fragment } from 'react'
import { Row, Col, Input as AntInput, Form } from 'antd'
import { StyledLabel } from './style'

export const Input = ({ name, type, label, value, onChange, require, unit, max, message }) => {

    return (
        <Fragment>
            <Row >
                <Col style={{ padding: '0 5px' }}>
                    <StyledLabel>{`${label}:`}</StyledLabel>
                    {require && <StyledLabel color='red'>{`*`}</StyledLabel>}
                </Col>
                <Col style={{ padding: '0 5px' }}>
                    <Row>
                        <Col>
                            <Form.Item name={name} rules={[{ required: require , message: message }]} >
                                <AntInput autoComplete='off' name={name} type={type} value={value} onChange={onChange} maxLength={max} />
                            </Form.Item>
                        </Col>
                        {unit && <Col style={{ padding: '0 20px' }}>
                            {unit}
                        </Col>}
                    </Row>

                </Col>
            </Row>
        </Fragment>
    )
}