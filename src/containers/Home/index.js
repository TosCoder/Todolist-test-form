import React, { Component, Fragment } from 'react'
import List from '../List'
import Form from '../Form'

class Home extends Component {
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

export default Home