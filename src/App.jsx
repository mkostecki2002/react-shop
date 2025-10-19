import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductCard from "./pages/ProductCard";
import Layout from "./Layout";
import { ScreenProvider } from "./contexts/ScreenContext";
import { CartProvider } from "./contexts/CartContext";
import { AppProvider } from "./contexts/AppContext";
import Cart from "./components/Cart";
import FormLoginRegister from "./pages/FormLoginRegister";
import { UserProvider } from "./contexts/UserContext";
import UserInfoPage from "./pages/UserInfoPage";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AppProvider>
          <ScreenProvider>
            <CartProvider>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/categories/:category" element={<Products />} />
                  <Route path="/products/:id?" element={<ProductCard />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/login" element={<FormLoginRegister />} />
                  <Route path="/me" element={<UserInfoPage />} />
                </Route>
              </Routes>
            </CartProvider>
          </ScreenProvider>
        </AppProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
