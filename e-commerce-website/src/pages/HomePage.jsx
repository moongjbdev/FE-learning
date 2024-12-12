import Advertising from "../components/Advertising"
import Category from "../components/Category"
import Features from "../components/Features"
import Header from "../components/Header"
import Products from "../components/Products"
import Widgets from "../components/Widgets"
const HomePage = () => {
  return (
    <div className="">
      <Advertising/>
      <Header/>
      <Widgets/>
      <Features/>
      <Category/>
      <Products />
    </div>
  )
}

export default HomePage
