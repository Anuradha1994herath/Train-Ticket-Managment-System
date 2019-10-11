import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router ,Route,Link} from 'react-router-dom';
import Dialog from './components/Dialog.js';
import Sampath from './components/Sampath.js';
import SignUp from './components/SignUp.js';
import Login from './components/Login';
import Tickets from './components/Tickets';
import Welcome from './components/Welcome';

export default class App extends Component{
  
  constructor(props){
    super(props);

    this.onchangeMobileNumber=this.onchangeMobileNumber.bind(this);
    this.onchangePinNumber=this.onchangePinNumber.bind(this);
    this.onchangeAmount=this.onchangeAmount.bind(this);
    this.onSubmit=this.onSubmit.bind(this);



    this.state ={
      MobileNumber :'',
      PinNumber :'',
      Amount :''
    }
  }

  onchangeMobileNumber(e){
    this.Setstate({
      MobileNumber:e.target.value
    });
  }
    onchangePinNumber(e){
        this.Setstate({
          PinNumber:e.target.value
        });
    }

    onchangeAmount(e){
      this.setState({
        Amount:e.target.value
      });
    }
    onSubmit(e){
      e.preventDefault();
      console.log('form submitted');
      console.log('MobileNumber:${this.state.MobileNumber}');
      console.log('PinNumber:${this.state.PinNumber}');
      console.log('Amount:${this.state.Amount}');
     


      this.setState({
        MobileNumber :'',
        PinNumber :'',
        Amount :''
        
      });



      this.onchangeCreditcardNumber=this.onchangeMobileNumber.bind(this);
        this.onchangeCVCNo=this.onchangeCVCNo.bind(this);
        this.onchangeCardHolder=this.onchangeCardHolder .bind(this);
        this.onchangeAmount=this.onchangeAmount.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    
    
    
        this.state ={
          CreditcardNumber :'',
          CVCNo :'',
          CardHolder:'',
          Amount :''
        }
      }
      onchangeMobileNumber(e){
        this.setState({
          CreditcardNumber:e.target.value
        });
      }
        onchangeCVCNo(e){
            this.setState({
              CVCNo:e.target.value
            });
        }

        onchangeCardHolder(e){
            this.setState({
              CardHolder:e.target.value
            });
          }
    
        onchangeAmount(e){
          this.setState({
            Amount:e.target.value
          });
        }
        onSubmit(e){
          e.preventDefault();
          console.log('form submitted');
          console.log('CreditcardNumber:${this.state.CreditcardNumber}');
          console.log('CVCNo:${this.state.CVCNo}');
          console.log('CardHolder:${this.state.CardHolder}');
          console.log('Amount:${this.state.Amount}');

          this.setState({
            CreditcardNumber :'',
            CVCNo :'',
            CardHolder:'',
            Amount :''
            
          });
    }
  
 

render(){
  return(
    <div>
    <Router>
   
    <nav className ="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/" className="navbar-brand">Train Ticket Reservation System</Link>
   
    <ul className="navbar-nav mr-auto">
    <li className="navbar-item">
      <Link to="/Dialog" className="nav-link">Mobile Payment</Link>
    </li>
    <li className="navbar-item">
      <Link to="/Sampath" className="nav-link">CreditCard Payment</Link>
    </li>
    <li className="navbar-item">
      <Link to="/SignUp" className="nav-link">SignUp</Link>
    </li>
    <li className="navbar-item">
      <Link to="/Login" className="nav-link">Login</Link>
    </li>
    <li className="navbar-item">
      <Link to="/Tickets" className="nav-link">booking</Link>
    </li>
    
    </ul>
</nav>
  <Route path="/" exact component={Welcome}/>
   <Route path="/Dialog" component={Dialog}/>
   <Route path="/Sampath" component={Sampath}/>
   <Route path="/SignUp" component={SignUp}/>
   <Route path="/Login" component={Login}/>
   <Route path="/Tickets" component={Tickets}/>
   </Router>
   
   </div>
  )

  }
}
