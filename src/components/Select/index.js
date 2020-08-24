import React, { Fragment } from 'react'
import { Row, Col, Select as AntSelect, Form } from 'antd'
import { StyledLabel } from './style'

export const Select = ({ name, label, require, options, width, value, onChange, message }) => {
    return (
        <Fragment>
            <Row>
                <Col style={{ padding: '0 5px' }}>
                    <StyledLabel>{`${label}:`}</StyledLabel>
                    {require && <StyledLabel color='red'>{`*`}</StyledLabel>}
                </Col>
                <Col style={{ padding: '0 5px' }}>
                    <Form.Item name={name} rules={[{ required: require, message: message }]}>
                        <AntSelect name={name} placeholder='Please Select' onChange={onChange(name)}  value={value} style={{ width: width }} >
                            {options.map((item, index) =>
                                <AntSelect.Option key={index} value={item}>{item}</AntSelect.Option>
                            )}
                        </AntSelect>
                    </Form.Item>
                </Col>
            </Row>
        </Fragment>
    )
} 
