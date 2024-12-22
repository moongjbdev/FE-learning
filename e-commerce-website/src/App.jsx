// import HomePage from "./pages/HomePage"
// import Breadcrumbs from "./components/Navigate/Breadcrumbs"
// import ShopPage from "./pages/ShopPage"
// import SignInPage from "./pages/Auth/SignInPage"
// import SignUpPage from "./pages/Auth/SignUpPage"
// import ForgetPasswordPage from "./pages/Auth/ForgetPasswordPage"
// import ResetPasswordPage from "./pages/Auth/ResetPasswordPage"
import VerifyEmailPage from "./pages/Auth/VerifyEmailPage"





import Header from "./components/Header"
const App = () => {
  return (
    <div className=" m-auto font-publicsans">
      {/* <HomePage/> */}
      {/* <Breadcrumbs/> */}
      {/* <ShopPage/> */}
      <Header/>
      <VerifyEmailPage
      />
    </div>
  )
}

export default App
