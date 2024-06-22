import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Product_detail from "./pages/Product_detail";
import Search from "./pages/Search";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Create from "./pages/admin/Create";
import Dashboard from "./pages/admin/Dashboard";
import Delete from "./pages/admin/Delete";
import Products from "./pages/admin/Products";
import Update from "./pages/admin/Update";
import Users from "./pages/admin/Users";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/product/detail" element={<Product_detail />} />
        <Route path="/product" element={<Product />} />
        <Route path="/search" element={<Search />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/create" element={<Create />} />
        <Route path="/admin/update" element={<Update />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/delete" element={<Delete />} />
        <Route path="/admin/products" element={<Products />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
