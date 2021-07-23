import './App.css';
import { Component } from 'react';
import {stopTime,startTime,clearTime} from "./Style.js"




class App extends Component {
  constructor(props){
    super(props)

    this.state={
      data:new Date(),
      num:0,
      timerId:null,
     
    }
    
  }



 startStop = () => {

   
    if (this.state.timerId != null) {
      clearInterval(this.state.timerId)
      this.setState({ timerId: null })
    }
    else {
      this.setState({ timerId: setInterval(() => this.setState({num: ++this.state.num, data:new  Date()}), 1000) })
    }
  
  }

  // callMe(){
  //  const stoptimer= setInterval(()=>{
  //     this.setState({
  //       data:new  Date(),
  //       })
  //   },1000)
  // }

  line=()=>{
    
  }

  clear=()=>{
    this.setState({num:0,data:new Date()})
    
  }
  
  render(){
    const {timerId,num,data}=this.state
    return(
      <div  className="data">
         <h2>it is</h2>
           {/* {this.callMe()}   */}
        <h1>{data.toLocaleString()}</h1>
       <button style={timerId == null ? startTime:stopTime}  onClick={this.startStop} > {timerId == null ? 'start' : 'stop'} </button> 
        <div className="current">{num} </div>
        <button style={clearTime} onClick={this.clear}>CLEAR</button>
        </div>
        
    )
  }
}


  

export default App

