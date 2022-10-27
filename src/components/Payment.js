import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    cardName: "",
    cardNumber: "",
    cvv: "",
    expire: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/order-successful");
  };
  return (
    <div className="container">
      <form className="needs-validation" noValidate onSubmit={onSubmit}>
        <div className="py-5 text-center">
          <h2>Payment Form</h2>
          <p className="lead">
            Please fill all the details in order to successfully place the order
          </p>
        </div>
        <div className="my-3">
          <div className="form-check">
            <input
              id="credit"
              name="paymentMethod"
              type="radio"
              className="form-check-input"
              required
            />
            <label className="form-check-label" htmlFor="credit">
              Credit card
            </label>
          </div>
          <div className="form-check">
            <input
              id="debit"
              name="paymentMethod"
              type="radio"
              className="form-check-input"
              required
            />
            <label className="form-check-label" htmlFor="debit">
              Debit card
            </label>
          </div>
          <div className="form-check">
            <input
              id="paypal"
              name="paymentMethod"
              type="radio"
              className="form-check-input"
              required
            />
            <label className="form-check-label" htmlFor="paypal">
              PayPal
            </label>
          </div>
        </div>
        <div className="row gy-3">
          <div className="col-md-6">
            <label htmlFor="cc-name" className="form-label">
              Name on card
            </label>
            <input
              type="text"
              className="form-control"
              id="cc-name"
              placeholder=""
              required
              name="cardName"
              value={details.cardName}
              onChange={handleChange}
            />
            <small className="text-muted">Full name as displayed on card</small>
            <div className="invalid-feedback">Name on card is required</div>
          </div>

          <div className="col-md-6">
            <label htmlFor="cc-number" className="form-label">
              Credit card number
            </label>
            <input
              type="text"
              className="form-control"
              id="cc-number"
              placeholder=""
              required
              name="cardNumber"
              value={details.cardNumber}
              onChange={handleChange}
            />
            <div className="invalid-feedback">
              Credit card number is required
            </div>
          </div>

          <div className="col-md-3">
            <label htmlFor="cc-expiration" className="form-label">
              Expiration
            </label>
            <input
              type="text"
              className="form-control"
              id="cc-expiration"
              placeholder=""
              required
              name="expire"
              value={details.expire}
              onChange={handleChange}
            />
            <div className="invalid-feedback">Expiration date required</div>
          </div>

          <div className="col-md-3">
            <label htmlFor="cc-cvv" className="form-label">
              CVV
            </label>
            <input
              type="text"
              className="form-control"
              id="cc-cvv"
              placeholder=""
              required
              name="cvv"
              value={details.cvv}
              onChange={handleChange}
            />
            <div className="invalid-feedback">Security code required</div>
          </div>
        </div>

        <hr className="my-4" />

        <button className="w-100 btn btn-primary btn-lg" type="submit">
          Save and Continue to checkout
        </button>
      </form>
    </div>
  );
};

export default Payment;
