import React, { useState } from "react";

function ContactForm() {
  // let [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" })
  // const handleChange = (e) => {
  //   const {name,value} = e.target;
  //   let data = {...formData,[name]:value}
  //   setFormData(data)
  // }
  // console.log(formData);
  //////////////////////////////////////////////
  let [formData1, setFromData1] = useState({ firstName: "hello" })
  let [formData2, setFromData2] = useState({ lastName: "jangid" })
  let [formData3, setFromData3] = useState({ email: "jangid@gmail.com" })
  let [formData4, setFromData4] = useState({ message: "jangid hello" })
  // console.log(formData1["firstName"]);

  const handleChange = (e) => {
    setFromData1({ firstName: e["target"]["value"] })
  }

  const handleChange1 = (e) => {
    setFromData2({ lastName: e["target"]["value"] })
  }
  const handleChange2 = (e) => {
    setFromData3({ email: e["target"]["value"] })
  }

  const handleChange3 = (e) => {
    setFromData4({ message: e["target"]["value"] })
  }
  const hanldeSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/contact/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({firstName:formData1["firstName"],lastName:formData2["lastName"],email:formData3["email"],message:formData4["message"]}),
    })
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  }
  return (
    <>
      <div className="untree_co-section" >
        <div className="container">
          <div className="block">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-8 pb-4">
                <div className="row mb-5">
                  <div className="col-lg-4">
                    <div
                      className="service no-shadow align-items-center link horizontal d-flex active"
                      data-aos="fade-left"
                      data-aos-delay={0}
                    >
                      <div className="service-icon color-1 mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-geo-alt-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                      </div>{" "}
                      {/* /.icon */}
                      <div className="service-contents">
                        <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                      </div>{" "}
                      {/* /.service-contents*/}
                    </div>{" "}
                    {/* /.service */}
                  </div>
                  <div className="col-lg-4">
                    <div
                      className="service no-shadow align-items-center link horizontal d-flex active"
                      data-aos="fade-left"
                      data-aos-delay={0}
                    >
                      <div className="service-icon color-1 mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-envelope-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                        </svg>
                      </div>{" "}
                      {/* /.icon */}
                      <div className="service-contents">
                        <p>info@yourdomain.com</p>
                      </div>{" "}
                      {/* /.service-contents*/}
                    </div>{" "}
                    {/* /.service */}
                  </div>
                  <div className="col-lg-4">
                    <div
                      className="service no-shadow align-items-center link horizontal d-flex active"
                      data-aos="fade-left"
                      data-aos-delay={0}
                    >
                      <div className="service-icon color-1 mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-telephone-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                          />
                        </svg>
                      </div>{" "}
                      {/* /.icon */}
                      <div className="service-contents">
                        <p>+1 294 3925 3939</p>
                      </div>{" "}
                      {/* /.service-contents*/}
                    </div>{" "}
                    {/* /.service */}
                  </div>
                </div>
                <form onSubmit={hanldeSubmit}>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label className="text-black" htmlFor="fname">
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fname"
                          onChange={(e) => handleChange(e)}
                          value={formData1["firstName"]}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label className="text-black" htmlFor="lname">
                          Last name
                        </label>
                        <input
                          onChange={(e) => handleChange1(e)}
                          value={formData2["lastName"]}
                          type="text"
                          className="form-control"
                          id="lname"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="text-black" htmlFor="email">
                      Email address
                    </label>
                    <input type="email" onChange={(e) => handleChange2(e)}
                      value={formData3["email"]} className="form-control" id="email" />
                  </div>
                  <div className="form-group mb-5">
                    <label className="text-black" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      onChange={(e) => handleChange3(e)}
                      value={formData4["message"]}
                      id="message"
                      cols={30}
                      rows={5}
                      defaultValue={""}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary-hover-outline"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
