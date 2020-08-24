import React, { Fragment } from 'react'
import { Row, Col, Input as AntInput, Form, Select } from 'antd'
import { StyledLabel, StyledCitizenIdInput } from './style'

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
                            <Form.Item name={name} rules={[{ required: require, message: message }]} >
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

export const CitizenId = ({ name, mask, label, value, onChange, require, unit, placeholder }) => {
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
                            <Form.Item name={name} >
                                <StyledCitizenIdInput autoComplete='off' mask={mask} name={name} placeholder={placeholder} value={value} onChange={onChange} />
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

export const Mobile = ({ name, title, type, label, value, value2, onChange, onSelect, require, unit, max, message, options, width, placeholder }) => {
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
                            <Form.Item name={title}  rules={[{ required: require, message: message }]} >
                                <Select name={title} placeholder={placeholder}  value={value2} onChange={onSelect(title)} style={{ width: width }} >
                                    {options.map((item, index) =>
                                        <Select.Option key={index} value={`+${item.phone}`}>
                                            <img src={`https://www.countryflags.io/${item.emoji}/flat/64.png`} alt='logo' style={{ width: '25px', height: '25px' }} /> {`+${item.phone}`}</Select.Option>
                                    )}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col style={{ padding: '0 5px' }}>-</Col>
                        <Col>
                            <Form.Item name={name} rules={[{ required: require, message: message }]} >
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