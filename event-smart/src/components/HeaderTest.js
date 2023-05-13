import { React, useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos && currentScrollPos > 200) {
      setVisible(false);
      console.log("The nav is ", visible);
    } else {
      setVisible(true);
      console.log("The nav is ", visible);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <header id="header" className={visible ? "site-header" : "hide"}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
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
          <div className="container d-flex">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                aria-hidden="true"
                className="mr-2"
                viewBox="0 0 24 24"
                focusable="false"
              >
                <circle cx="12" cy="13" r="4" />
              </svg>
              <strong id="header-text">Event Smart Productions</strong>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Services">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#performers">
                  Performers
                </a>
              </li>
              <li>
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/EventElements"
                >
                  Event Elements
                </a>
              </li>
              <li>
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#socials"
                >
                  Socials
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
