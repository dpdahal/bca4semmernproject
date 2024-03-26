import React from 'react'
import HeaderComponent from "../../layouts/HeaderComponent"
import FooterComponent from "../../layouts/FooterComponent"

export default function AboutComponent() {
  return (
    <div className='container'>
      <HeaderComponent />
      <div className="row mt-4 mb-4">
        <div className="col-md-8">
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, impedit itaque. Ea nesciunt laborum id voluptates? Perspiciatis sapiente ab autem aperiam? Deserunt laboriosam nihil animi fuga aliquid voluptatem architecto eligendi.</p>
        </div>
        <div className="col-md-4">
        <img src="https://picsum.photos/seed/picsum/200/300"
             className="img-fluid" alt="..." />
        </div>
      </div>
      <FooterComponent />
    </div>
  )
}
