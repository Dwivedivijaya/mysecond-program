import React, { Component } from 'react'
import img from './image/image.png'

export default class vijaya extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <div className="banner">
                          <img src={img} width="100%"/>
                          </div>
                    </div>
                    <div className="col-md-5">
                        <div className="contact_text">
                    <h3>1000 Jobs</h3>
                    </div>
                    <div className="paragraph_text mb-2">
                    <p>Pellentesqus habitant morbi tristique senectus et netus et malesusde fames ac turpis egestas. Vestibulum tortor quam.</p>
                    <p>feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.</p>
                    <p>Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare</p>
                    </div>
                    </div>
                <div className="col-md-5">
                    <div className="loginform">
               <div className="card">
                   <div className="card-body">
                       <h5 claassName="card-title">Login</h5>
                   </div>
                   <div className="row mx-0 py-4">
                       <div className="col-md-2">
                       <i class="fa fa-user py-3"></i>
                       </div>
                       <div className="col-md-10">
                           <input type="text" alt="" placeholder="Username"/>
                       </div></div>
                       <div className="row mx-0 py-4">
                       <div className="col-md-2">
                       <i class="fas fa-unlock py-3"></i>
                       </div>
                       <div className="col-md-10">
                           <input type="password" alt="" placeholder="Password"/>
                       </div></div>
                       <div class="row">
                           <div className="col-md-12">
                               <a href=""><button type="submit" className="btn btn-info">Submit</button></a>
                           </div>
                       </div>
                       <div className="row mx-0">
                       <div className="col-md-12">
                           <a href=""><p className="fpassword">Forgot Password</p></a>
                       </div>
                       </div>

                     
               </div>
               </div>
                </div>
                  </div>
            </div>
        )
    }
    }
