import React, { Component } from "react";
import NavBar from './Navbar'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <header className="row">
            <div className="col my-auto">Services</div>
          </header>
          <div className="row content">
            <article className="col-lg-2 d-none d-lg-block">
              <ul>
                <li>SERVICES</li>
                <li>AIR DELIVERY</li>
                <li>GROUND SHIPPING</li>
                <li>SEA DELIVERY</li>
              </ul>
            </article>
            <section className="col-lg-10">
              <div className="container-fluid">
                <div className="row">
                  <div className="col what-we-do">
                    <h3>WHAT WE DO</h3>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam hendrerit nisi sed sollicitudin pellentesque. Nunc
                      posuere purus rhoncus pulvinar aliquam. Ut aliquet
                      tristique nisl vitae volutpat. Nulla aliquet porttitor
                      venenatis. Donec a dui et dui fringilla consectetur id nec
                      massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum
                      fermentum vel tincidunt neque. Sed sed lacinia lectus.
                      Duis sit amet sodales felis. Duis nunc eros, mattis
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={require("./img/air_delivery.jpg")}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Air delivery</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam hendrerit nisi sed sollicitudin
                          pellentesque. Nunc posuere purus rhoncus pulvinar
                          aliquam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={require("./img/ground_shipping.jpg")}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Ground shipping</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam hendrerit nisi sed sollicitudin
                          pellentesque. Nunc posuere purus rhoncus pulvinar
                          aliquam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={require("./img/sea_delivery.png")}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Sea delivery</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam hendrerit nisi sed sollicitudin
                          pellentesque. Nunc posuere purus rhoncus pulvinar
                          aliquam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <footer className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-4 d-none d-sm-block">
                <ul>
                  <li id="first-list">HOME</li>
                  <li>ABOUT US</li>
                  <li>SERVICES</li>
                  <li>NEWS</li>
                  <li>CONTACT</li>
                </ul>
              </div>
              <div className="col-lg-5 col-md-4 col-sm-4 col-xs-6">
                <h5>CONTACT US</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elusmod.</p>
                <span>
                <br />
                  <p><b>Email:</b>hello@company.com</p>
                </span>
                <span>
                  <p><b>Phone:</b>+375 (29) 543-76-49. +675 (29) 543-76-49</p>
                </span>
                <span>
                  <p><b>Mail:</b> 20 Lorem ipsum do sit amet, 6046 Larsinac,
                  Country</p>
                </span>
              </div>
              <div className="col-lg-5 col-md-4 col-sm-4 col-xs-12 newsletter">
                NEWSLETTER
                <br />
                <p>Eiusmod tempor incididunt ut labore et dolore magna.</p>
                <br />
                <form>
                  <input
                    className="input-group form-control"
                    placeholder="Enter E-Mail"
                  />
                  <br />
                  <button className="btn btn-primary">SUBMIT</button>
                </form>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
