import React, { Fragment } from 'react'
import { Row, Col, DatePicker as AntDatePicker, Form } from 'antd'
import { StyledLabel } from './style'

export const Datepicker = ({ name, label, require, message, onChange, value }) => {
    return (
        <Fragment>
            <Row>
                <Col style={{ padding: '0 5px' }}>
                    <StyledLabel>{`${label}:`}</StyledLabel>
                    {require && <StyledLabel color='red'>{`*`}</StyledLabel>}
                </Col>
                <Col style={{ padding: '0 5px' }}>
                    <Form.Item name={name} rules={[{ required: require, message: message  }]} >
                        <AntDatePicker onChange={onChange} value={value} format='MM/DD/YYYY' />
                    </Form.Item>
                </Col>
            </Row>
        </Fragment>
    )
}