import React, { useEffect, useState } from "react";

function CardProductList({ one }) {
  let [cartData, setCartData] = useState(JSON.parse(localStorage.getItem("cartData")) || [])
  let [showIcon, setShowIcon] = useState(false)

  useEffect(() => {
    let checkProductShow = cartData.find(item => item["id"] == one["id"])
    if (checkProductShow == undefined) {
      setShowIcon(true)
    }
  }, [])

  const handleCartData = () => {
    let checkProduct = cartData.find(item => item["id"] == one["id"])
    let arr = [...cartData]
    if (checkProduct == undefined) {
      arr.push(one)
    }
    setCartData(arr)
  }
  localStorage.setItem("cartData", JSON.stringify(cartData))

  return (
    <>
      <div className="col-12 col-md-4 col-lg-3 mb-5">
        <a className="product-item" href="#">
          <img
            src={one["productImage"]}
            className="img-fluid product-thumbnail"
          />
          <h3 className="product-title">{one["productName"]}</h3>
          <strong className="product-price">{one["productPrice"]}</strong>
          {showIcon && (
            <span className="icon-cross" onClick={handleCartData}>
              <img src="images/cross.svg" className="img-fluid" />
            </span>
          )}
        </a>
      </div>
    </>
  );
}

export default CardProductList;
