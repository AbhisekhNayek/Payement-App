import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <NavLink to="/">About</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">FAQ</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Careers</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Blog</NavLink>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <NavLink to="#">Online Payment</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Security</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Privacy</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Fast Transfer</NavLink>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Services</h2>
                  <ul>
                    <li>
                      <NavLink to="#">UPI</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Loan</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Debit Card</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Credit</NavLink>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <i class="fab fa-facebook-f fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/thapatechnical/"
                        target="_thapa"
                      >
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-youtube fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-twitter fontawesome-style"></i>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2023 NeoPay. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
