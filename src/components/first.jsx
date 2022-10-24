import React, { Component } from 'react'
import './comps.css'

export default class First extends Component {

    state = {humanAge:0}
    input = React.createRef();

    calcAge = () => {
        let dogAge = this.input.current.value
        this.setState({humanAge:(dogAge*7)});
        console.log();
    }
   
  render() {
    return (
      <div className='p-3'>
        <h1 className='display-6 text-center'>Calc Age of Dog to Human:</h1>
        <div className='col-6 col-md-3'>
            <label>Dog Age:</label>
            <input ref={this.input} className='form-control' placeholder='Dog Age...' type="number" />
        </div>
        <div className='d-flex'>
        <button onClick={this.calcAge} className='btn btn-dark mt-2'>Calc</button>
        <p className="m-0 p-0 mt-2 ms-4">Human Age:{this.state.humanAge}</p>
        </div>
      </div>
    )
  }
}
