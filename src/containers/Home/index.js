import React, { Component, Fragment } from 'react'
import List from '../List'
import Form from '../Form'
import { formController } from '../../services/formController'
import { connect } from 'react-redux'
import { setInitialList } from '../../store/todos/action'

class Home extends Component {
    componentDidMount = () => {
        this.setData()
    }

    setData = () => {
        const data = formController().getData()
        this.props.dispatch(setInitialList(JSON.parse(data)))
    }

    render() {
        return (
            <Fragment>
                <Form />
                <br />
                <List />
            </Fragment>
        )
    }
}

export default connect()(Home)