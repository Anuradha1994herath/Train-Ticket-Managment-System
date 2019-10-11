import React,{Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
export default class Login extends Component{

    constructor(props){
        super(props);
        
        
        this.onchangeemail=this.onchangeemail.bind(this);
        
        this.onchangepwd=this.onchangepwd.bind(this);
        
    
    
    
        this.state ={
          
          email :'',
          pwd:''
        }
      }
      
        onchangeemail(e){
            this.setState({
              email:e.target.value
            });
        }

        
    
        onchangepwd(e){
          this.setState({
            pwd:e.target.value
          });
        }
        

        onSubmit(e){
          e.preventDefault();
          console.log('form submitted');
          
          console.log('email:${this.state.email}');
          
          console.log('pwd:${this.state.pwd}');
          
         
    
          const newUser ={
            
            email :this.state.email,
           
            pwd :this.state.pwd
            
         }

         axios.get('http://localhost:4000/api/viewallcustomer',newUser)
         .then(res=>console.log(res.data));
 

    
          this.setState({
           
            email :'',
            pwd :''
           
            
          });
        
        }
        



    render(){
            return(
                <div>
                <div style={{marginTop:20}}>
                   <h3>Login to the System</h3>
                    <form onSubmit={this.onSubmit}>
                        

                        <div className="form-group">
                        <label>Email :</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Email}
                            onChange={this.onchangeEmail}/>  
                        </div>


                        

                        <div className="form-group">
                        <label>Password :</label>
                        <input type="password"
                            className="form-control"
                            value={this.state.Password}
                            onChange={this.onchangePassword}/>  
                        </div>

                        
                        
                    <div className="form-group">
                    <Link to={"/Tickets"}>    <input type="Submit" value="Login" className="btn btn-primary" ></input></Link>
                        
                    </div>

                    </form>

                </div>
                </div>
            )
        }
}
