import React, { Fragment } from 'react'
import { Row, Col, Radio as AntRadio } from 'antd'
import { StyledLabel } from './style'

export const Radio = ({ label, require }) => {
    return (
        <Fragment>
            <Row>
                <Col style={{ padding: '0 5px' }}>
                    <StyledLabel>{`${label}:`}</StyledLabel>
                    {require && <StyledLabel color='red'>{`*`}</StyledLabel>}
                </Col>
                <Col style={{ padding: '0 5px' }}>
                    <AntRadio />
                </Col>
            </Row>
        </Fragment>
    )
}