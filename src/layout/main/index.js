import React, { Fragment, Component } from 'react'
import { StyledMain } from './style'
class _Mainlayout extends Component {
    render() {
        return (
            <Fragment>
                <StyledMain>
                    {this.props.children}
                </StyledMain>

            </Fragment>
        )
    }

}

const Mainlayout = _Mainlayout

const withMainLayout = (ComposeComponent, prevRoute) => (props) => {
    return (
        <Mainlayout>
            <ComposeComponent prevRoute={prevRoute} />
        </Mainlayout>
    )
}

export default withMainLayout