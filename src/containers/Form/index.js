import React, { Component, Fragment } from 'react'
import { Row, Button, Form as AntdForm } from 'antd'
import { Input, Select, Datepicker, Radio } from '../../components'
// import { parseCitizen } from '../../helpers/functions'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid';
import { data } from '../../helpers/mocks'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            citizen: '',
            mobile: '',
            passport: '',
            salary:'',
            title: undefined,
            nationality: undefined,
            birthday: '',
            gender: undefined
        }
        this.formRef = React.createRef()
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
        this.setState({ gender : value })
    }

    onDatepicker = event => {
        this.setState({ birthday: moment(event).format('MM/DD/YYYY') })
    }
    

    onFinish = () => {
        console.log(this.state)
        
        
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

export default Form