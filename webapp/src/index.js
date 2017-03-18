import React from 'react'
import ReactDOM from 'react-dom'
import { DatePicker } from 'antd'
import 'antd/dist/antd.css'

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render () {
        return (
            <DatePicker/>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
