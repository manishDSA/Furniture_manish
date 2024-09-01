import React from 'react'

function Hy({item}) {
    // console.log(item);
    
  return (
    <>
       <tr>
                      <td className="product-thumbnail">
                        <img
                          src={item["productImage"]}
                          alt="Image"
                          className="img-fluid"
                        />
                      </td>
                      <td className="product-name">
                        <h2 className="h5 text-black">{item["productName"]}</h2>
                      </td>
                      <td>{item["productPrice"]}</td>
                      <td>
                        <div
                          className="input-group mb-3 d-flex align-items-center quantity-container"
                          style={{ maxWidth: 120 }}
                        >
                          <div className="input-group-prepend">
                            <button
                              className="btn btn-outline-black decrease"
                              type="button"
                            >
                              −
                            </button>
                          </div>
                          <input
                            type="text"
                            className="form-control text-center quantity-amount"
                            defaultValue={1}
                            value={item["pQuantity"]}
                            placeholder=""
                            aria-label="Example text with button addon"
                            aria-describedby="button-addon1"
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-outline-black increase"
                              type="button"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>${item["productPrice"]*item["pQuantity"]}</td>
                      <td>
                        <a href="#" className="btn btn-black btn-sm">
                          X
                        </a>
                      </td>
                    </tr>
    </>
  )
}

export default Hy;
