import React from "react";
import "./Navbar.css";
const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-white bg-white sticky-top border-bottom py-1 nav_color">
        <div className="container-fluid px-5">
          <a className="navbar-brand" href="#">
            <img src="images/coingecko (2).png" width="200px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-5">
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="#">
                  Coins
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Exchanges
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  DeFi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  NFT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Publications
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Community
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-5 searchbar"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={props.onChange}
              />
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
