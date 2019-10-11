import React,{Component} from 'react';
import axios from 'axios';

export default class Sampath extends Component{

    constructor(props){
        super(props);
        
        this.onchangeCreditcardNumber=this.onchangeCreditcardNumber.bind(this);
        this.onchangeCVCNo=this.onchangeCVCNo.bind(this);
        this.onchangeCardHolder=this.onchangeCardHolder .bind(this);
        this.onchangeAmount=this.onchangeAmount.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onchangeemail=this.onchangeemail.bind(this);
    
    
    
        this.state ={
          CreditcardNumber :'',
          CVCNo :'',
          CardHolder:'',
          Amount :'',
          email:''
        }
      }
      onchangeCreditcardNumber(e){
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
        onchangeemail(e){
          this.setState({
            email:e.target.value
          });
      }
        onSubmit(e){
          e.preventDefault();
          console.log('form submitted');
          console.log('CreditcardNumber:${this.state.CreditcardNumber}');
          console.log('CVCNo:${this.state.CVCNo}');
          console.log('CardHolder:${this.state.CardHolder}');
          console.log('Amount:${this.state.Amount}');
          console.log('email:${this.state.email}');
    
          const newSampath ={
            CredicardNumber : this.state.CreditcardNumber,
            CVCNo :this.state.CVCNo,
            CardHolder:this.state.CardHolder,
            Amount :this.state.Amount,
            
         }


         const mail ={
          email :this.state.email
         }
         axios.post('http://localhost:4000/api/sampathdetails',newSampath)
         .then(res=>console.log(res.data));
         axios.post('http://localhost:4000/api/emaildialog',mail)
         .then(res=>console.log(res.data));
 

    
          this.setState({
            CreditcardNumber :'',
            CVCNo :'',
            CardHolder:'',
            Amount :'',
            email:''
          });
      

        }




    render(){
            return(
                <div>
                <div style={{marginTop:20}}>
                   <h3>Pay with Sampath</h3>
                    <form onSubmit={this.onSubmit}>
                      
                        <div className="form-group">
                        <label>CreditcardNumber :</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.CredicardNumber}
                            onChange={this.onchangeCreditcardNumber}/>  
                        </div>

                        <div className="form-group">
                        <label>CVCNumber :</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.CVCNo}
                            onChange={this.onchangeCVCNo}/>  
                        </div>


                        <div className="form-group">
                        <label>Card Holder :</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.CardHolder}
                            onChange={this.onchangeCardHolder}/>  
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
