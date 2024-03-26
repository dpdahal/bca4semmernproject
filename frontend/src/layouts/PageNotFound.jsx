import React from 'react'
import { Link } from 'react-router-dom'
import HeaderComponent from "./HeaderComponent"
import FooterComponent from "./FooterComponent"
export default function PageNotFound() {
  return (
    <div className='container'>
        <HeaderComponent />
        <h1 className='mt-2 mb-2'>404 Page Not Found</h1>
        <Link to="/" className='btn btn-primary'>Go to Home</Link>
        <FooterComponent />
    </div>
  )
}
