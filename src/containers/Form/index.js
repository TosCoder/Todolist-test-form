import React, { Component, Fragment } from 'react'
import { Row, Button, Form as AntdForm } from 'antd'
import { Input, Select, Datepicker, Radio } from '../../components'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid';
import { createList, updateSubmit } from '../../store/todos/action'
import { connect } from 'react-redux'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            citizen: '',
            mobile: '',
            passport: '',
            salary: '',
            title: undefined,
            nationality: undefined,
            birthday: undefined,
            gender: undefined
        }
        this.formRef = React.createRef()
    }

    componentDidMount = () => {
        this.getData()
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log('Form-update =>', this.props)
        if (prevProps.todos !== this.props.todos) {
            this.getData()
        }
    }

    getData = () => {
        console.log('Form =>', this.props)
        if (this.props.todos.dataEdit) {
            console.log('have editing')
            const {
                firstname,
                lastname,
                citizen,
                mobile,
                passport,
                salary,
                title,
                nationality,
                birthday,
                gender
            } = this.props.todos.dataEdit

            this.setState({
                firstname: firstname,
                lastname: lastname,
                citizen: citizen,
                mobile: mobile,
                passport: passport,
                salary: salary,
                title: title,
                nationality: nationality,
                birthday: moment(birthday),
                gender: gender
            })
            
            this.formRef.current.setFieldsValue({
                firstname: firstname,
                lastname: lastname,
                citizen: citizen,
                mobile: mobile,
                passport: passport,
                salary: salary,
                title: title,
                nationality: nationality,
                birthday: moment(birthday),
                gender: gender
            })
        } else {
            this.formRef.current.setFieldsValue({
                firstname: '',
                lastname: '',
                citizen: '',
                mobile: '',
                passport: '',
                salary: '',
                title: undefined,
                nationality: undefined,
                birthday: undefined,
                gender: undefined
            })
        }

    }

    onChange = event => {
        const { name, value } = event.target
        switch (name) {
            case 'firstname':
                this.setState({ firstname: value })
                break;
            case 'lastname':
                this.setState({ lastname: value })
                break;
            case 'citizen':
                this.setState({ citizen: value })
                break;
            case 'mobile':
                this.setState({ mobile: value.replace(/[^\d]+/g, '') })
                this.formRef.current.setFieldsValue({
                    mobile: value.replace(/[^\d]+/g, '')
                })
                break;
            case 'passport':
                this.setState({ passport: value })
                break;
            case 'salary':
                this.setState({ salary: value })
                break;

            default:
                break;
        }
    }

    onSelect = name => event => {
        switch (name) {
            case 'title':
                this.setState({ title: event })
                break;
            case 'nationality':
                this.setState({ nationality: event })
                break;
            default:
                break;
        }
    }

    onRadio = event => {
        const { value } = event.target
        this.setState({ gender: value })
    }

    onDatepicker = event => {
        this.setState({ birthday: moment(event).format('MM/DD/YYYY') })
    }


    onFinish = () => {
        const {
            firstname,
            lastname,
            citizen,
            mobile,
            passport,
            salary,
            title,
            nationality,
            birthday,
            gender
        } = this.state

        const initalData = JSON.parse(localStorage.getItem('data'))

        if (this.props.todos.dataEdit) {
            console.log('edit!!!')
            const body = {
                ...this.props.todos.dataEdit,
                firstname: firstname,
                lastname: lastname,
                citizen: citizen,
                mobile: mobile,
                passport: passport,
                salary: salary,
                title: title,
                nationality: nationality,
                birthday: birthday,
                gender: gender
            }
            
           this.onUpdate(body)

        }else{
            console.log('create!!!')
            const body = {
                key: initalData ? initalData.length + 1 : 1,
                _id: uuidv4(),
                checked: false,
                firstname: firstname,
                lastname: lastname,
                citizen: citizen,
                mobile: mobile,
                passport: passport,
                salary: salary,
                title: title,
                nationality: nationality,
                birthday: birthday,
                gender: gender
            }

            this.onCreate(initalData, body)
    
        }
    }

    onUpdate = (body) => {
        const newArr = this.props.todos.data.map(item => {
            if(item._id === body._id){
                return body
            }else{
                return item
            }
        })

        console.log(newArr)
        this.props.dispatch(updateSubmit(newArr))
        
        this.getData()

    }

    onCreate = (initalData, body) => {
        const arr = []
        if (initalData) {
            initalData.push(body)
            this.props.dispatch(createList(initalData))
        } else {
            arr.push(body)
            this.props.dispatch(createList(arr))
        }

        this.getData()
    }


    render() {
        return (
            <Fragment>
                <AntdForm onFinish={this.onFinish} ref={this.formRef} style={{ border: '1px solid black', padding: '20px 30px' }} >
                    <Row >
                        <Select name='title' label='Title' options={['Mr.', 'Mrs.', 'Miss']} width='150px' onChange={this.onSelect} value={this.state.title} require message='Please select your title.' />
                        <Input name='firstname' label='Firstname' onChange={this.onChange} value={this.state.firstname} require message='Please input your firstname.' />
                        <Input name='lastname' label='Lastname' onChange={this.onChange} value={this.state.lastname} require message='Please input your lastname.' />
                    </Row>
                    <br />
                    <Row >
                        <Datepicker name='birthday' label='Birthday' require message='Please input your birthday.' onChange={this.onDatepicker} value={this.state.birthday} />
                        <Select name='nationality' label='Nationality' width='200px' options={['thai', 'eng', 'jp']} onChange={this.onSelect} value={this.state.nationality} />
                    </Row>
                    <br />
                    <Input name='citizen' type='tel' label='CitizenID' max={13} onChange={this.onChange} value={this.state.citizen} />
                    <br />
                    <Radio name='gender' label='Gender' onChange={this.onRadio} value={this.state.gender} />
                    <br />
                    <Input name='mobile' label='Mobile Phone' onChange={this.onChange} value={this.state.mobile} require message='Please input your mobile.' />
                    <br />
                    <Input name='passport' label='Passport No' onChange={this.onChange} value={this.state.passport} />
                    <br />
                    <Row justify='space-between'>
                        <Input name='salary' label='Expected Salary' unit='THB' onChange={this.onChange} value={this.state.salary} require message='Please input your salary.' />
                        <Button type='primary' htmlType='submit'>Submit</Button>
                    </Row>
                </AntdForm>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Form)