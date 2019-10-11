import React,{Component} from 'react';
import axios from 'axios';

export default class Dialog extends Component{

    constructor(props){
        super(props);
        this.onchangeMobileNumber=this.onchangeMobileNumber.bind(this);
        this.onchangePinNumber=this.onchangePinNumber.bind(this);
        this.onchangeAmount=this.onchangeAmount.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onchangeemail=this.onchangeemail.bind(this);
    
    
    
        this.state ={
          MobileNumber :'',
          PinNumber :'',
          Amount :'',
          email:''
        }
      }
      onchangeMobileNumber(e){
        this.setState({
          MobileNumber:e.target.value
        });
      }
        onchangePinNumber(e){
            this.setState({
              PinNumber:e.target.value
            });
        }
    
        onchangeAmount(e){
          this.setState({
            Amount:e.target.value
          });
        }
        onchangeemail(e){
          this.setState({
            email:e.target.value
          });
      }
        onSubmit(e){
          e.preventDefault();
          console.log('form submitted');
          console.log('MobileNumber:${this.state.MobileNumber}');
          console.log('PinNumber:${this.state.PinNumber}');
          console.log('Amount:${this.state.Amount}');
          console.log('email:${this.state.email}');
    
          const dialog ={
            MobileNumber : this.state.MobileNumber,
            PinNumber :this.state.PinNumber,
            Amount :this.state.Amount,
            
            
         }
         const mail ={
          email :this.state.email
         }

         axios.post('http://localhost:4000/api/adddialog',dialog)
         .then(res=>console.log(res.data));
 
         axios.post('http://localhost:4000/api/emaildialog',mail)
         .then(res=>console.log(res.data));

    
          this.setState({
           MobileNumber :'',
            PinNumber :'',
            Amount :'',
            email:''
            
          });

        }




    render(){
            return(
                <div>
                <div style={{marginTop:20}}>
                   <h3>Pay with Dialog</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                        <label>MobileNumber :</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.MobileNumber}
                            onChange={this.onchangeMobileNumber}/>  
                        </div>

                        <div className="form-group">
                        <label>PinNumber :</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.PinNumber}
                            onChange={this.onchangePinNumber}/>  
                        </div>

                        <div className="form-group">
                        <label>Amount :</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Amount}
                            onChange={this.onchangeAmount}/>  
                        </div>
                        
                    <div className="form-group">
                        <input type="Submit" value="Submit Details" className="btn btn-primary"></input>
                    </div>

                    </form>

                </div>
                </div>
            )
        }
}
