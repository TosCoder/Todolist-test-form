import React, { Component, Fragment } from 'react'
import { Row, Col, Table, Checkbox, Button } from 'antd'
import { data } from '../../helpers/mocks'
import { Link } from 'react-router-dom'

class List extends Component{
    render(){

        const colums = [
            {
                title: '',
                key: 'check',
                render: () => (
                    <Fragment>
                        <Col style={{ padding: '0 0 0 10px' }}>
                             <Checkbox />
                        </Col>
                        
                    </Fragment>
                    )
                   
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                width: '40%',
                render: text => (
                    <Link to='/form'>{text}</Link>
                )
            },
            {
                title: 'Gender',
                dataIndex: 'gender',
                key: 'gender',
                width: '12%'

            },
            {
                title: 'Mobile Phoone',
                dataIndex: 'mobile',
                key: 'mobile',
                width: '12%'
            },
            {
                title: 'Nationality',
                dataIndex: 'nationality',
                key: 'nationality',
                width: '12%'
            },
            {
                title: 'Action',
                key: 'action',
                render: () => (
                    <Row>
                        <Col style={{ padding: '0 5px' }}>
                            <Button  type='primary' >Edit</Button>
                        </Col>
                        <Col style={{ padding: '0 5px' }}>
                            <Button  type='primary' danger >Delete</Button>
                        </Col>
                    </Row>
                )
            },
        
        ]

        return(
            <Fragment>
                <Row justify='center'>
                    <h1>รายการแสดงรายชื่อพนักงาน</h1>
                </Row>
                <br />
                <Row>
                    <Col style={{ marginLeft: '25px' }} >
                        <Checkbox />
                    </Col>
                    <Col style={{ marginLeft: '20px' }}>
                        <p>Select All</p>
                    </Col>
                    <Col style={{ marginLeft: '10px' }}>
                        <Button type='primary' danger style={{ height: '20px' }}>
                            <span style={{ position: 'relative', top: '-6px' }}>Delete</span>
                        </Button>
                    </Col>
                </Row>
                
                <Table  dataSource={data}  columns={colums} pagination={{ pageSize: 5 }} />
            </Fragment>
        )
    }
}

export default List