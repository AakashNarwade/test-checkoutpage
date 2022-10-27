import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Payment from "./components/Payment";

import ShippingInfo from "./components/ShippingInfo";
import OrderSuccessful from "./components/OrderSuccessful";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ShippingInfo />} />
          <Route path="/checkout" element={<Payment />} />
          <Route path="/order-successful" element={<OrderSuccessful />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
