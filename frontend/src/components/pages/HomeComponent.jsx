import HeaderComponent from "../../layouts/HeaderComponent"
import FooterComponent from "../../layouts/FooterComponent"
function HomeComponent() {
  return (
    <div className="container">
      <HeaderComponent />      
      <h1>Home page</h1>
      <FooterComponent />
    </div>
  )
}

export default HomeComponent