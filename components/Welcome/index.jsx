import {Component} from 'react'
import './index.css'

class Welcome extends Component{
  state={isSubscribed : true}

  onSubscribe = ()=>{
    this.setState((prevState)=>({ isSubscribed: !prevState.isSubscribed       }))
  }
  
  render(){
    const {isSubscribed} = this.state;
    
    return(
      <div className="welcome">
        <h1>Welcome</h1>
        <h3>Thank you ! Happy Learning</h3>
        {isSubscribed ? <button onClick={this.onSubscribe}>Subscribe</button> : <button onClick={this.onSubscribe}>Unsubscribe</button>}
      </div>
    )
  }
}

export default Welcome