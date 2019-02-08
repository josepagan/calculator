import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {result:0,
    operand: null,
    operator: null,
    floatInput:false,
  float:0}

  setOperatorAndOperand = (operatorValue) => {this.setState((prev)=>({
    operand: parseFloat(prev.result.toString() + "." + prev.float.toString()),
    result: 0,
    operator: operatorValue,
    floatInput:false,
    float:0
  }))}

  updateOperand = (value) => {
    this.state.floatInput ? 
      this.setState((prev)=>{
        return({
          float: prev.float * 10 + value})})
      :  this.setState((prev)=>{
        return({
          result: prev.result * 10 + value})})
  }

  calc = {
    "+": (x,y)=>x + y,
    "-": (x,y)=>x - y,
    "*": (x,y)=>x * y,
    "/": (x,y)=>x / y,
  }

  resolve = () => {this.setState((prev)=>({
    result: this.calc[prev.operator](prev.operand, parseFloat(prev.result.toString()+"."+prev.float.toString()))
  }))}

  handleClick = (value)=>()=>{
    (typeof value == 'number') ? this.updateOperand(value) 
      : value === '=' ? this.resolve()                           
      : value === '.' ? this.setState({floatInput:true}) 
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
        <Key value={'.'} clicked={this.handleClick}/> 
        <Key value={'='} clicked={this.handleClick}/> 
      </div>
    )
  }
}

const Key = ({value, clicked})=> 
  <button onClick={clicked(value)}>{value.toString()}</button> 

    export default App;
