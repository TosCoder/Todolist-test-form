import React, { Component, Fragment } from 'react'
import { Row } from 'antd'
import { Input, Select, Datepicker, Radio } from '../../components'

class Form extends Component {
    render() {
        return (
            <Fragment>
                <Row justify='space-between' align='middle'>
                    <Input label='Title' require />
                    <Input label='Firstname' require />
                    <Input label='Lastname' require />
                </Row>
                <br />
                <Row justify='space-between'>
                    <Datepicker label='Birthday' require />
                    <Select label='Nationality' />
                </Row>
                <br />
                <Radio label='Gender' />
                <br />
                <Input label='Mobile Phone' require />
                <br />
                <Input label='Passport No' />
                <br />
                    <Input label='Expected Salary' unit='THB' require />
            </Fragment>
        )
    }
}

export default Form