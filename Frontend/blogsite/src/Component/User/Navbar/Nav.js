import React, { useRef, useState } from "react";
import "./Navbar.scss";
// import toggle from "../userprofile/Userprofile"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const NavBar = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
  }

  // event.target.value=null

  return (
    <>
      <nav className="nav">
        <div className="Container">
          <div className="sub-Container">
            <div className="navbar-brand">
              <h2 href="/">Blogsite</h2>
            </div>
            <ul className="navbar-links">
              <li>
                <h4>
                  <a className="link" to="/home">
                    Home
                  </a>
                </h4>
              </li>
              <li>
                <h4>
                  <a className="link" to="/categories">
                    Categories
                  </a>
                </h4>
              </li>
              <li>
                <h4>
                  <a className="link" to="/about">
                    About
                  </a>
                </h4>
              </li>
              <li>
                <h4>
                  <a className="link" to="/contact">
                    Contact
                  </a>
                </h4>
              </li>
            </ul>
          </div>
          <div className="user-profile">
            <p>Hemanshu Parmar</p>
            <img
              onClick={toggle}
              className="user-img"
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            />
          </div>
        </div>
      </nav>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}>Your Profile</ModalHeader>
        <ModalBody>
          <div className="user-details-container">
            <div className="edit-img-box">
              <img
                className="user-profile-img"
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                alt=""
              />
              <input
                style={{ display: "none" }}
                ref={inputRef}
                type="file"
                onChange={handleFileChange}
              />
              <button className="edit-btn" onClick={handleClick}>
                Edit image +
              </button>
            </div>
            <div className="details">
              <h3>Hemanshu Parmar</h3>
              <p>hemanshup@gmail.com</p>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Update
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default NavBar;
