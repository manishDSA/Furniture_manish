import React from "react";
import CardProductList from "./CardProductList";

function ProductSection() {
  return (
    <>
      <div className="product-section">
        <div className="container">
          <div className="row">
            {/* Start Column 1 */}
            
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">
                Crafted with excellent material.
              </h2>
              <p className="mb-4">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.{" "}
              </p>
              <p>
                <a href="shop.html" className="btn">
                  Explore
                </a>
              </p>
            </div>
            {/* End Column 1 */}
            {/* Start Column 2 */}
            <CardProductList
              one={{
                productImage: "images/product-1.png",
                productName: "Nordic Chair",
                productPrice: "$50.00",
              }}
            />
            {/* End Column 2 */}
            {/* Start Column 3 */}
            <CardProductList
              one={{
                productImage: "images/product-2.png",
                productName: "Kruzo Aero Chair",
                productPrice: "$78.00",
              }}
            />
            {/* End Column 3 */}
            {/* Start Column 4 */}
            <CardProductList
              one={{
                productImage: "images/product-3.png",
                productName: "Ergonomic Chair",
                productPrice: "$43.00",
              }}
            />
            {/* End Column 4 */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSection;
