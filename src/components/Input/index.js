import React, { Fragment } from 'react'
import { Row, Col, Input as AntInput } from 'antd'
import { StyledLabel } from './style'

export const Input = ({ label, value, onChange, require, unit }) => {
    return (
        <Fragment>
            <Row >
                <Col style={{ padding: '0 5px' }}>
                    <StyledLabel>{`${label}:`}</StyledLabel>
                    {require && <StyledLabel color='red'>{`*`}</StyledLabel>}
                </Col>
                <Col style={{ padding: '0 5px' }}>
                    <Row align='middle'>
                        <Col>
                            <AntInput value={value} onChange={onChange} />
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