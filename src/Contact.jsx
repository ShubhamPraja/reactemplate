import React, { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`${data.fullname}
        ,${data.phone}
        ,${data.email}
        ,${data.msg}`);
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact-US</h1>
        <div className="container container_div">
          <div className="row justify-content-center">
            <div className="col-md-6 center mx auto">
              <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label for="exampleFormControlInput1"> Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="fullname"
                    value={data.fullname}
                    onChange={InputEvent}
                    placeholder="Plaese Enter Name"
                  ></input>
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1">Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                    placeholder="Enter Your Name"
                  ></input>
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                    placeholder="name@example.com"
                  ></input>
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    name="msg"
                    value={data.msg}
                    onChange={InputEvent}
                    rows="3"
                  ></textarea>
                </div>
                <div>
                  <button class="btn btn-outline-primary">Submit form</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
