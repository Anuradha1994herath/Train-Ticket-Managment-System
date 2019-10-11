import React, { Component } from 'react'
import {Link} from "react-router-dom";



class Tickets extends Component{
  
    constructor(props){
      super(props);
      this.state = {qty: 0}
    }
    
    buy(){
      this.setState((prevState) => ({
        qty: prevState.qty +1
      }));
      this.props.handleTotal(this.props.price);
    }
  
    show(){
      this.props.handleShow(this.props.name);
    } 
  
    render(){
      
      return(
        <div>
          <h2> {this.props.name}</h2>
          <h3> Price - ${this.props.price}</h3>
          <h4>Qty - {this.state.qty}</h4>
          <Link to={"/Dialog"}><button onClick={this.buy.bind(this)}>dialog</button></Link>
          <Link to={"/Sampath"}> <button onClick={this.buy.bind(this)}>sampath</button></Link>
          
          <hr/>
        </div>
      )
    }
  }
  
  class Total extends Component{
    
    render(){
      return(
        <div>
          <h4> Total Cash : $ {this.props.total} </h4>
        </div>
      )
    }
  } 
  
  class ProductList extends React.Component{
    constructor(props){
      super(props);
      this.state = {total: 0}
    }
    calculateTotal(price) {
      this.setState((prevState) => ({
        total: prevState.total + price
      }));
    }
    showProduct(name){
      alert("You Selected" + name);
    }
    render(){
      return(
        <div>
         
        </div>
      )
    }
  } 
  
  


export default Tickets;