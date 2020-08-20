import React, { Fragment } from 'react'
import { Row, Col, Select as AntSelect } from 'antd'
import { StyledLabel } from './style'

export const Select = ({ label, require }) => {
    return (
        <Fragment>
            <Row>
                <Col style={{ padding: '0 5px' }}>
                    <StyledLabel>{`${label}:`}</StyledLabel>
                    {require && <StyledLabel color='red'>{`*`}</StyledLabel>}
                </Col>
                <Col style={{ padding: '0 5px' }}>
                    <AntSelect  />
                </Col>
            </Row>
        </Fragment>
    )
} 