import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Navbar from "./components/blocks/Navbar"
import Footer from "./components/blocks/Footer"
import CardProduct from "./components/ui/CardProduct"

export default function App() {
  return (
    <BrowserRouter>

    {/* NAVBAR => muncul di semua halaman */}
    <Navbar />
<Routes>
        <Route path="/" element= {<Home />} />

        <Route path="/product/:id" element={<Product />} />
      </Routes>

      

      {/* FOOTER */}
      <Footer />

    </BrowserRouter>
  )
}