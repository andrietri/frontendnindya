import React, { Component } from 'react'

class Dashboard extends Component {
    render() {

        let result = (
            <div className="sidebar" data-color="blue">
                <p>Test</p>
            </div>
        )

        return (
            <>
                { result}
            </>
        )
    }
}

export default Dashboard