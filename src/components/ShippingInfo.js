import React from "react";
import { useNavigate } from "react-router-dom";

const ShippingInfo = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/checkout");
  };
  return (
    <div className="container">
      <main>
        <div className="py-5 text-center">
          <h2>Checkout htmlForm</h2>
          <p className="lead">
            Below is an example htmlForm built entirely with Bootstrap’s
            htmlForm controls. Each required htmlForm group has a validation
            state that can be triggered by attempting to submit the htmlForm
            without completing it.
          </p>
        </div>

        <div className="row g-5">
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <htmlForm className="needs-validation" noValidate>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="htmlForm-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="htmlForm-control"
                    id="firstName"
                    placeholder="enter your first name"
                    value=""
                    required
                    onChange={() => {}}
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="htmlForm-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="htmlForm-control"
                    id="lastName"
                    placeholder=""
                    value=""
                    required
                    onChange={() => {}}
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="username" className="htmlForm-label">
                    Username
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input
                      type="text"
                      className="htmlForm-control"
                      id="username"
                      placeholder="Username"
                      required
                      onChange={() => {}}
                    />
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="htmlForm-label">
                    Email <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    className="htmlForm-control"
                    id="email"
                    placeholder="you@example.com"
                    onChange={() => {}}
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address htmlFor shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="htmlForm-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="htmlForm-control"
                    id="address"
                    placeholder="1234 Main St"
                    required
                    onChange={() => {}}
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address2" className="htmlForm-label">
                    Address 2 <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="htmlForm-control"
                    id="address2"
                    placeholder="Apartment or suite"
                    onChange={() => {}}
                  />
                </div>

                <div className="col-md-5">
                  <label htmlFor="country" className="htmlForm-label">
                    Country
                  </label>
                  <select className="htmlForm-select" id="country" required>
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="state" className="htmlForm-label">
                    State
                  </label>
                  <select className="htmlForm-select" id="state" required>
                    <option value="">Choose...</option>
                    <option>CalihtmlFornia</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="zip" className="htmlForm-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="htmlForm-control"
                    id="zip"
                    placeholder=""
                    required
                    onChange={() => {}}
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>

              <hr className="my-4" />

              <div className="htmlForm-check">
                <input
                  type="checkbox"
                  className="htmlForm-check-input"
                  id="same-address"
                  onChange={() => {}}
                />
                <label className="htmlForm-check-label" htmlFor="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>

              <div className="htmlForm-check">
                <input
                  type="checkbox"
                  className="htmlForm-check-input"
                  id="save-info"
                  onChange={() => {}}
                />
                <label className="htmlForm-check-label" htmlFor="save-info">
                  Save this inhtmlFormation htmlFor next time
                </label>
              </div>

              <button
                className="w-100 btn btn-primary btn-lg"
                type="submit"
                onClick={onSubmit}
              >
                Save and Continue to checkout
              </button>
            </htmlForm>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShippingInfo;
