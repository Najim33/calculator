import React,{Component} from 'react';
import './App.css';
import Button  from './components/Button'
import Input from './components/Input'
import {evaluate} from 'mathjs'

const isOperator= val =>{
  return (val==='*' || val==='+' || val==='-'|| val==='/'|| val==='(')?true:false
     /* return true
  else 
      return false*/
}

class App extends Component {
  
  constructor(props){
    super(props);
    this.state={
      input:[""],
      setToEqual: false
    }
  }
  
  addToInput = val =>{
        if (!isOperator(val)){
          if (this.state.setToEqual===false){
            this.setState({input:[this.state.input]+[val]})
            }
          else
            {
            this.setState({input:[val]})
            this.setState({setToEqual:false})
            }
          }
          else  {
            if (this.state.input[0]==="SYNTAX ERROR")
                this.setState({input:""+[val]})
            else  
                this.setState({input:[this.state.input]+[val]})
            this.setState({setToEqual:false})
          }
  }
  handleEqual = ()=>{
    try {
      this.setState({input:[evaluate(this.state.input)]})
      this.setState({setToEqual:true})
    } catch (error) {
      this.setState({input:["SYNTAX ERROR"]})
      this.setState({setToEqual:true})
    }
    
    
  }
  handleDelete =()=>{
    this.setState({input:this.state.input.slice(0,this.state.input.length-1)  })
  }
  handlCheck =()=>{
    if (this.state.input.includes("("))
          this.addToInput(")")
    else
          this.addToInput("")
  }
  render(){
    
    
    
    return (
      <div className="App">
         
      <div className='calc-wrapper'>
        <Input input={this.state.input} inp={this.state.setToEqual}></Input>
        
        <div className='row'>
            <Button handleClick={this.addToInput}>(</Button>
            <Button handleClick={this.handlCheck}>)</Button>
            <Button handleClick={()=>this.setState({input:["0"],setToEqual:true})}>Clear All</Button>
            <Button handleClick={this.handleDelete}><i className="fa fa-arrow-left" aria-hidden="true"></i></Button>
        </div>
        <div className='row'>
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button >
            <Button handleClick={this.addToInput}>3</Button >
            <Button handleClick={this.addToInput}>+</Button >
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput}>4</Button >
            <Button handleClick={this.addToInput}>5</Button >
            <Button handleClick={this.addToInput}>6</Button >
            <Button handleClick={this.addToInput}>-</Button >
          </div>
          
          <div className='row'>
            <Button handleClick={this.addToInput}>7</Button >
            <Button handleClick={this.addToInput}>8</Button >
            <Button handleClick={this.addToInput}>9</Button >
            <Button handleClick={this.addToInput}>*</Button >
          </div>
          <div className='row '>
            <Button handleClick={this.addToInput}>.</Button >
            <Button handleClick={this.addToInput}>0</Button >
            <Button  handleClick={this.handleEqual} >=</Button >
            <Button handleClick={this.addToInput}>/</Button >
          </div>
          
          
          

      </div>
    </div> 
      
    );
  }
}

export default App;
