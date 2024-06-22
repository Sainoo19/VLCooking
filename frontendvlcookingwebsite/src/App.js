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
import Update from "./pages/admin/Update";

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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
