import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Button, Modal, Carousel } from 'react-bootstrap';
import './projectItem.scss';

const NbbangApp = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useImperativeHandle(ref, () => ({
    openModal() {
      handleShow();
    },
  }));

  return (
    <>
      <Modal show={show} onHide={handleClose} dialogClassName="modal-80w">
        <Modal.Body>
          <Modal.Header>
            <Modal.Title>
              Business App
              <span>
                <img src="mobile_icon.png" alt="" /> APP
              </span>
            </Modal.Title>
          </Modal.Header>
          <div className="modal-body-container">
            <div className="carousel-box">
              <Carousel activeIndex={index} onSelect={handleSelect} interval={2000}>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="NbbangApp/Nbbang-app_1.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="NbbangApp/Nbbang-app_2.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="NbbangApp/Nbbang-app_3.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="NbbangApp/Nbbang-app_4.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="NbbangApp/Nbbang-app_5.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="division"></div>
            <div className="modal-contents">
              <div className="text">기업 쇼핑몰(복지몰) App</div>
              <div className="num">
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0.5 16 17"
                  class="bi bi-person-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  />
                </svg>
                <span> 개인</span>
              </div>
              <div className="stack">
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 17"
                  class="bi bi-code-slash"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"
                  />
                </svg>
                <span>Ionic</span>
                <span>Angular Router</span>
                <span>Cordova</span>
                <span>Capacitor</span>
              </div>
              <div className="role">
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 18"
                  class="bi bi-pencil-square"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
                <span> 기획 디자인 개발</span>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Button variant="info" onClick={handleClose}>
          Close
        </Button>
      </Modal>
    </>
  );
});

export default NbbangApp;
