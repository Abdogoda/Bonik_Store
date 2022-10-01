import { Route, Routes } from "react-router-dom";
import Header from "./componants/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Products from "./pages/products/Products";
import SingleProduct from "./pages/products/SingleProduct";
import Testimonials from "./pages/testimonials/Testimonials";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Error from "./pages/error/Error";
import Footer from "./componants/footer/Footer";
function App() {
  return (
    <>
      <Header />
      <div style={{ marginTop: "8.5rem" }}>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<SingleProduct />} />
            <Route path="cart" element={<Cart />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="contact" element={<Contact />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
