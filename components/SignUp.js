import React,{Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

export default class Sampath extends Component{

    constructor(props){
        super(props);

        this.onchangefname=this.onchangefname.bind(this);
        this.onchangelname=this.onchangelname.bind(this);
        this.onchangeemail=this.onchangeemail.bind(this);
        this.onchangepwd=this.onchangepwd.bind(this);
        this.onchangenic=this.onchangenic.bind(this);
        this.onchangejobType=this.onchangejobType.bind(this);
     
       
        
        this.onSubmit=this.onSubmit.bind(this);
    
    
    
        this.state ={
          fname :'',
          lname :'',
          email :'',
          pwd:'',
          nic:'',
          jobType:''
        }
      }
      onchangefname(e){
        this.setState({
          fname:e.target.value
        });
      }
      onchangelname(e){
        this.setState({
          lname:e.target.value
        });
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
    
        
        onchangenic(e){
          this.setState({
            nic:e.target.value
          });
        }
        onchangejobType(e){
          this.setState({
            jobType:e.target.value
          });
        }
       
        
      

        onSubmit(e){
          e.preventDefault();
          console.log('form submitted');
          console.log('fname:${this.state.fname}');
          console.log('lname:${this.state.lname}');
          console.log('email:${this.state.email}');
          console.log('pwd:${this.state.pwd}');
          console.log('nic:${this.state.nic}');
          console.log('jobType:${this.state.pjobType}');
        
          
          
         
    
          const newUser ={

            
            
            




            fname : this.state.fname,
            lname : this.state.lname,
            email :this.state.email,
            pwd :this.state.pwd,
            nic:this.state.nic,
            jobType :this.state.jobType
          
            
         }
         axios.post('http://localhost:4000/api/addcustomer',newUser)
         .then(res=>console.log(res.data));
 

    
          this.setState({
            fname :'',
            lname:'',
            email :'',
            pwd :'',
            nic:'',
            jobType:''
           
            
          });


        }



    render(){
            return(
                <div>
                <div style={{marginTop:20}}>
                   <h3>Register to the System</h3>
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                        <label>First Name :</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.fname}
                            onChange={this.onchangefname}/>  
                        </div>

                        <div className="form-group">
                        <label>Last Name :</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.lname}
                            onChange={this.onchangelname}/>  
                        </div>

                        <div className="form-group">
                        <label>Email :</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onchangeemail}/>  
                        </div>

                        <div className="form-group">
                        <label>Password :</label>
                        <input type="password"
                            className="form-control"
                            value={this.state.pwd}
                            onChange={this.onchangepwd}/>  
                        </div>

                        <div className="form-group">
                        <label>NIC :</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.nic}
                            onChange={this.onchangenic}/>  
                        </div>

                        <div className="form-group">
                        <label>JobType :</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.jobType}
                            onChange={this.onchangejobType}/>  
                        </div>
                        


                        
                        
                    <div className="form-group">
                    <Link to={"/Tickets"}> <input type="Submit" value="Register" className="btn btn-primary"></input></Link>
                    </div>

                    </form>

                </div>
                </div>
            )
        }
}
