import React from 'react'
import HeaderComponent from "../../layouts/HeaderComponent"
import FooterComponent from "../../layouts/FooterComponent"

export default function AboutComponent() {
  return (
    <div className='container'>
      <HeaderComponent />
      <h1>About</h1>
      <FooterComponent />
    </div>
  )
}
