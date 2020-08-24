import React, { Component, Fragment } from 'react'
import { Row, Col, Table, Checkbox, Button } from 'antd'
import { formController } from '../../services'
import { connect } from 'react-redux'
import { updateList, deleteList, deleteAll } from '../../store/todos/action'

class List extends Component{
    constructor(){
        super()
        this.state = {
            myList: [],
            checked : false,
            myId: []
        }        
    }

    componentDidMount = () => {
        this.getData()
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps.todos.data !== this.props.todos.data){
            this.getData()
        }
    }

    getData = () => {
        const data = formController().getData()
        this.setState({ myList: JSON.parse(data) })
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

        if(this.state.myId.includes(data._id)){
            const arr = this.state.myId.filter(item => {return item !== data._id })
            this.setState({ myList: arrData, myId: arr })
        }else{
            this.state.myId.push(data._id)
            this.setState({ myList: arrData, myId: this.state.myId })
        }       
    
       
    }

    handleDelete = (data) => {
        const arrData = this.state.myList.filter(item =>{ return item._id !== data._id && item } )
        this.props.dispatch(deleteList(arrData))
        this.setState({ myList : arrData })
        
    }

    handleUpdate = (data) => {
        this.props.dispatch(updateList(data))
    }

    handleDeleteAll = () => {
        if(this.state.checked){

            this.props.dispatch(deleteAll([]))
             this.setState({ myList : [] })
        }else{
            const arrData = this.state.myList.filter(item => !this.state.myId.includes(item._id))
            this.props.dispatch(deleteList(arrData))
            this.setState({ myList : arrData })
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
                key: 'name',
                width: '40%',
                render: (item) => (
                    <Fragment>
                       <p >{`${item && item.firstname} ${item && item.lastname}`}</p>
                    </Fragment>
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
                key: 'mobile',
                width: '12%',
                render: (item) => (
                    <Fragment>
                       <p >{`${item && item.nation}${item && item.mobile}`}</p>
                    </Fragment>
                    )
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
                            <Button  type='primary' onClick={() => this.handleUpdate(item)} >Edit</Button>
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

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(List)