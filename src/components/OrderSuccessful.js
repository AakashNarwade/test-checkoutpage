import React from "react";

const OrderSuccessful = () => {
  return (
    <div className="container">
      <div className="py-5 text-center">
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <div style={styles.orderForm}>
                <h1 className="fw-light">Order Place Page</h1>
                <h2 className="lead">OrderSuccessfully Placed</h2>

                <p></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
  orderForm: {
    width: 400,
    height: 600,
    margin: 12,
    // border: "2px solid black",
    borderRadius: 8,
    padding: 12,
  },
};
export default OrderSuccessful;
