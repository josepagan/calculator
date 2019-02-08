import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {result:0,
    operand: null,
  operator: null}

  setOperatorAndOperand = (operatorValue) => {this.setState((prev)=>({
    operand: prev.result,
    result: 0,
    operator: operatorValue
  }))}

  updateOperand = (value) => {
    this.setState((prev)=>({
      result: prev.result * 10 + value}))}

  calc = {
    "+": (x,y)=>x + y,
    "-": (x,y)=>x - y,
    "*": (x,y)=>x * y,
    "/": (x,y)=>x / y,
  }
  
  resolve = () => {this.setState((prev)=>({
    result: this.calc[prev.operator](prev.operand, prev.result)
  }))}

  handleClick = (value)=>()=>{
    (typeof value == 'number') ? this.updateOperand(value) 
     : value === '=' ? this.resolve()                           
     : this.setOperatorAndOperand(value)
  }

  render() {
    console.log(this.state)
    const numkeys = [] 
    for (let i=0;i<10;i++){
      numkeys.push(<Key key={i} value={i} clicked={this.handleClick} />)
    }

    return (
      <div className="App">
        {numkeys}
        <Key value={'+'} clicked={this.handleClick}/> 
        <Key value={'-'} clicked={this.handleClick}/> 
        <Key value={'*'} clicked={this.handleClick}/> 
        <Key value={'/'} clicked={this.handleClick}/> 
        <Key value={'='} clicked={this.handleClick}/> 

      </div>
    )
  }
}


const Key = ({value, clicked})=> 
  <button onClick={clicked(value)}>{value.toString()}</button> 















    export default App;
