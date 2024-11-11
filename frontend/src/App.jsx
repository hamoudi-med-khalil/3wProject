import { Route, Routes } from "react-router-dom"
import Login from "./pages/auth/Login"
import AuthLayout from "./components/auth/AuthLayout"
import Register from "./pages/auth/Register"
import AdminLayout from "./components/admin/AdminLayout"
import AdminDashboard from "./pages/admin/Dashbord"
import AdminProducts from "./pages/admin/Products"
import AdminFeatures from "./pages/admin/Features"
import AdminOrders from "./pages/admin/Orders"
import ShoppingLayout from "./components/shopping-view/Layout"
import NotFound from "./pages/not-found"
import ShoppingHome from "./pages/shopping-view/Home"
import ShoppingAccount from "./pages/shopping-view/Account"
import ShoppingCheckout from "./pages/shopping-view/Checkout"
import ShoppingListing from "./pages/shopping-view/Listing"

function App() {

  return (
    <>

      <div className="flex flex-col overflow-hidden bg-white">
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route path="/admin" element={<AdminLayout/>}>
              <Route path="dashboard" element={<AdminDashboard/>} />
              <Route path="products" element={<AdminProducts/>} />
              <Route path="orders" element={<AdminOrders/>} />
              <Route path="features" element={<AdminFeatures/>} />
          </Route>

          <Route path="/shop" element={<ShoppingLayout/>}>
              <Route path="home" element={<ShoppingHome />}/>
              <Route path="listing" element={<ShoppingListing />}/>
              <Route path="checkout" element={<ShoppingCheckout />}/>
              <Route path="account" element={<ShoppingAccount />}/>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </>
  )
}

export default App
