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
import CreateOrder from "./pages/admin/CreateOrder";
import CreateProduct from "./pages/admin/CreateProduct";
import CreateRecipe from "./pages/admin/CreateRecipe";
import CreateRole from "./pages/admin/CreateRole";
import CreateUser from "./pages/admin/CreateUser";
import Delete from "./pages/admin/Delete";
import Ingredient from "./pages/admin/Ingredient";
import Orders from "./pages/admin/Oders";
import Products from "./pages/admin/Products";
import Recipes from "./pages/admin/Recipes";
import Roles from "./pages/admin/Role";
import Update from "./pages/admin/Update";
import Users from "./pages/admin/Users";
import Payment from "./pages/payment/Payment";
import PaymentConfirm from "./pages/payment/PaymentConfirm";

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
				<Route path="/admin" element={<Recipes />} />
				<Route path="/admin/create/user" element={<CreateUser />} />
				<Route path="/admin/create/role" element={<CreateRole />} />
				<Route path="/admin/create/product" element={<CreateProduct />} />
				<Route path="/admin/create/order" element={<CreateOrder />} />
				<Route path="/admin/create/recipe" element={<CreateRecipe />} />
				<Route path="/payment" element={<Payment />} />
				<Route path="/payment/confirm" element={<PaymentConfirm />} />
				<Route path="/admin/update" element={<Update />} />
				<Route path="/admin/users" element={<Users />} />
				<Route path="/admin/delete" element={<Delete />} />
				<Route path="/admin/products" element={<Products />} />
				<Route path="/admin/orders" element={<Orders />} />
				<Route path="/admin/roles" element={<Roles />} />
				<Route path="/admin/ingredient" element={<Ingredient />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
