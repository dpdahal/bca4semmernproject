import React from 'react'
import HeaderComponent from '../../layouts/HeaderComponent';
import FooterComponent from '../../layouts/FooterComponent';

export default function LoginComponent() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12">
                <HeaderComponent />
            </div>
            <div className="col-md-12">
                <h1>Login Page</h1>
            </div>
            <div className="col-md-12">
                
            </div>
            <div className="col-md-12">
                <FooterComponent />
            </div>
        </div>      
    </div>
  )
}
