import React from 'react'

function Tmem({one}) {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <img src={one["image"]} className="img-fluid mb-5" />
              <h3 clas="">
                <a href="#">
                  <span className="">{one["name"]}</span>
                </a>
              </h3>
              <span className="d-block position mb-4">{one["position"]}</span>
              <p>
                Separated they live in. Separated they live in Bookmarksgrove
                right at the coast of the Semantics, a large language ocean.
              </p>
              <p className="mb-0">
                <a href="#" className="more dark">
                  {one["more"]} <span className="icon-arrow_forward" />
                </a>
              </p>
            </div>
    </>
  )
}

export default Tmem
