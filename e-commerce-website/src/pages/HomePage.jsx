import Advertising from "../components/Advertising"
import Banner from "../components/Banner"
import BigBanner from "../components/BigBanner"
import Category from "../components/Category"
import ComputerAccessories from "../components/ComputerAccessories"
import Features from "../components/Features"
import Header from "../components/Header"
import LatestNews from "../components/LatestNews"
import Newsletters from "../components/Newsletters"
import Products from "../components/Products"
import TopProducts from "../components/TopProducts"
import Widgets from "../components/Widgets"
import Footer from "../components/Footer"
import QuickViewModal from "../components/Modal/QuickViewModal"

const HomePage = () => {
  return (
    <div className="">
      {/* <Advertising/>
      <Header/>
      <Widgets/>
      <Features/>
      <Category/>
      <Products />
      <Banner />
      <ComputerAccessories />
      <BigBanner />
      <TopProducts />
      <LatestNews />
      <Newsletters />
      <Footer /> */}
      <QuickViewModal isOpen={true} onClose={false}/>
    </div>
  )
}

export default HomePage
