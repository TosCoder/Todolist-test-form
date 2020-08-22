import React, { Component, Fragment } from 'react'
import { Row, Col, Table, Checkbox, Button } from 'antd'
import { data } from '../../helpers/mocks'
import { Link } from 'react-router-dom'

class List extends Component{
    constructor(){
        super()
        this.state = {
            myList: data,
            checked : false
        }        
    }

    hamdleCheckAll = (all) => { 
        const arrData = this.state.myList.map(item => {
                return {
                    ...item,
                    checked: !all
                }
        })
        this.setState({ myList: arrData, checked: !all })
    }

    handleCheck = (data) => {
        
        const arrData = this.state.myList.map(item => {
            if(item._id === data._id){
                return {
                    ...item,
                    checked: !item.checked
                }
            }else{
                return item
            }
        })
        this.setState({ myList: arrData })
    }

    handleDelete = (data) => {
        const arrData = this.state.myList.filter(item =>{ return item._id !== data._id && item } )
        this.setState({ myList : arrData })
        
    }

    handleDeleteAll = () => {
        if(this.state.checked){
             this.setState({ myList : [] })
        }
       
    }
    
    render(){

        const colums = [
            {
                title: '',
                key: 'check',
                render: (item) => (
                    <Fragment>
                        <Col style={{ padding: '0 0 0 10px' }}>
                             <Checkbox checked={item.checked} onClick={() => this.handleCheck(item)} />
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
                render: (item) => (
                    <Row>
                        <Col style={{ padding: '0 5px' }}>
                            <Button  type='primary' >Edit</Button>
                        </Col>
                        <Col style={{ padding: '0 5px' }}>
                            <Button  type='primary' danger onClick={() => this.handleDelete(item)} >Delete</Button>
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
                        <Checkbox onClick={() => this.hamdleCheckAll(this.state.checked)} />
                    </Col>
                    <Col style={{ marginLeft: '20px' }}>
                        <p>Select All</p>
                    </Col>
                    <Col style={{ marginLeft: '10px' }}>
                        <Button type='primary' danger style={{ height: '20px' }} onClick={() => this.handleDeleteAll()}>
                            <span style={{ position: 'relative', top: '-6px' }}>Delete</span>
                        </Button>
                    </Col>
                </Row>
                
                <Table  dataSource={this.state.myList}  columns={colums} pagination={{ pageSize: 5 }} />
            </Fragment>
        )
    }
}

export default List