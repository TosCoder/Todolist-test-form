import React, { Fragment } from 'react'
import { Row, Col, DatePicker as AntDatePicker } from 'antd'
import { StyledLabel } from './style'

export const Datepicker = ({ label, require }) => {
    return (
        <Fragment>
            <Row>
                <Col style={{ padding: '0 5px' }}>
                    <StyledLabel>{`${label}:`}</StyledLabel>
                    {require && <StyledLabel color='red'>{`*`}</StyledLabel>}
                </Col>
                <Col style={{ padding: '0 5px' }}>
                    <AntDatePicker />
                </Col>
            </Row>
        </Fragment>
    )
}