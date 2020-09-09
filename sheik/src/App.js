import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.yourname="xyz";

    this.state={};
  }

sayhello(name){
  return "hello"+name;
}

  render(){
    const MyName="abc";
    return(

     
    <div className="App">
    <h2>just some sample data:{this.sayhello("abc")}</h2>
    <h2>just some sample data:{this.yourname}</h2>
   
    
    
     
    </div>
  );
}
}


export default App;
