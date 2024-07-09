import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import CartModel from "./pages/CartModel";
import Create from "./pages/Create/Create";
import Delete from "./pages/Delete/Delete";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Product_detail from "./pages/Product_detail";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Update from "./pages/Update/Update";
// import UpdateIngredient from "./pages/Update/UpdateIngredient";
// import UpdateOther from "./pages/Update/UpdateOther";
// import UpdateProduct from "./pages/Update/UpdateProduct";
// import UpdateRecipe from "./pages/Update/UpdateRecipe";
// import UpdateRole from "./pages/Update/UpdateRole";
// import UpdateUser from "./pages/Update/UpdateUser";
import Categories from "./pages/admin/Categories";
// import CreateOrder from "./pages/admin/CreateOrder";
// import CreateProduct from "./pages/admin/CreateProduct";
// import CreateRecipe from "./pages/admin/CreateRecipe";
// import CreateRole from "./pages/admin/CreateRole";
// import CreateUser from "./pages/admin/CreateUser";
// import CreaterIngredient from "./pages/admin/CreaterIngredient";
import Ingredient from "./pages/admin/Ingredient";
import Orders from "./pages/admin/Oders";
import Recipes from "./pages/admin/Recipes";
import Roles from "./pages/admin/Role";
import Users from "./pages/admin/Users";
import Payment from "./pages/payment/Payment";
import PaymentConfirm from "./pages/payment/PaymentConfirm";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				{/* page */}

				<Route path="/" element={<Home />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/about" element={<About />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/product/detail" element={<Product_detail />} />
				<Route path="/product" element={<Product />} />
				<Route path="/search" element={<Search />} />
				<Route path="/admin" element={<Recipes />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/cart" element={<CartModel />} />

				{/* create admin */}

				<Route path="/admin/create" element={<Create />} />
				{/* <Route path="/admin/create/user" element={<CreateUser />} />
				<Route path="/admin/create/role" element={<CreateRole />} />
				<Route path="/admin/create/product" element={<CreateProduct />} />
				<Route path="/admin/create/order" element={<CreateOrder />} />
				<Route path="/admin/create/recipe" element={<CreateRecipe />} />
				<Route path="/admin/create/ingredient" element={<CreaterIngredient />} /> */}

				{/* payment */}

				<Route path="/payment" element={<Payment />} />
				<Route path="/payment/confirm" element={<PaymentConfirm />} />

				{/* admin */}

				<Route path="/admin/users" element={<Users />} />
				<Route path="/admin/delete" element={<Delete />} />
				<Route path="/admin/Categories" element={<Categories />} />
				<Route path="/admin/orders" element={<Orders />} />
				<Route path="/admin/roles" element={<Roles />} />
				<Route path="/admin/ingredient" element={<Ingredient />} />

				{/* admin updater */}
				<Route path="/admin/update" element={<Update />} />
				{/* <Route path="/admin/updater/user/:userId" element={<UpdateUser />} /> */}
				{/* <Route path="/admin/updater/user" element={<UpdateUser />} /> */}
				{/* <Route path="/admin/updater/recipe" element={<UpdateRecipe />} />
				<Route path="/admin/updater/other" element={<UpdateOther />} />
				<Route path="/admin/updater/ingredient" element={<UpdateIngredient />} />
				<Route path="/admin/updater/product" element={<UpdateProduct />} />
				<Route path="/admin/updater/role" element={<UpdateRole />} /> */}

				{/* delete admin */}
				<Route path="/admin/delete" element={<Delete />} />
			</Routes>
			<Footer className="self-end" />
		</BrowserRouter>
	);
}

export default App;
