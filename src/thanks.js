import React, { Component } from 'react'
import Image from './image/image.png'


export default class thanks extends Component {
    state = {
        time:''
    }
    gettime = () => {
      let timing = new Date(); 
let timee=timing.getHours() + ":" + timing.getMinutes() + ":" + timing.getSeconds();
this.setState({
    time:timee
})
    }
    componentDidMount(){
        setInterval(() => {this.gettime()},1000);
    }
    render() {
        return (
            <div className="container">
                <div className="card">
                <h1 className="card-header">Thanks <span className="span">You!</span></h1>
                <div className="card-body">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-lg-6">
        <h4>{(this.state.time).toString()}</h4>
                                <h4><span className="span">Congratulations,</span> Broker account created</h4>
                               <p> Check your emailfor a verification link. After verifying your email only you can log in to your broker account.</p>
                            <a href='#'><button type="submit" className="btn bg-info">Go to Brokerage</button></a>
                            </div>
                            <div className="col-md-6 col-sm-6 col-lg-6">
                                <img src={Image} width="100%"/>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        );
    }
}
