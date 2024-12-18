// import HomePage from "./pages/HomePage"
import Breadcrumbs from "./components/Navigate/Breadcrumbs"
import ShopPage from "./pages/ShopPage"
const App = () => {
  return (
    <div className=" m-auto font-publicsans">
      {/* <HomePage/> */}
      <Breadcrumbs/>
      <ShopPage/>
    </div>
  )
}

export default App
