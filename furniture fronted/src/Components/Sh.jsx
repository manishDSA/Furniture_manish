import React from 'react'

function Sh({one}) {
    
    
  return (
    <>
      <div className="col-6 col-md-6 col-lg-3 mb-4">
              <div className="feature">
                <div className="icon">
                  <img
                    src={one["icon"]}
                    alt="Image"
                    className="imf-fluid"
                  />
                </div>
                <h3>{one["title"]}</h3>
                <p>
                  {one["description"]}
                </p>
              </div>
            </div>
    </>
  )
}

export default Sh
