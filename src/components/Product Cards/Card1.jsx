import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
import image from "../../assets/machinery.jpg";

//this component accepts props. prop names are img, multiplier, itemName,initPrice, price, category, available
const Card1 = ({img, multiplier, itemName,initPrice, price, category, available }) => {
  return (
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0">Today's Combo Offer</p>
              <div
                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                style={{ width: "35px", height: "35px" }}
              >
                <p className="text-white mb-0 small">x{multiplier}</p>
              </div>
            </div>
            <MDBCardImage style={{aspectRatio:"15/10"}}src={img  || image} position="top" alt="Laptop" />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    {category}
                  </a>
                </p>
                <p className="small text-danger">
                  <s>{initPrice}</s>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">{itemName}</h5>
                <h5 className="text-dark mb-0">{price}</h5>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <p className="text-muted mb-0">
                  Available: <span className="fw-bold">{available}</span>
                </p>
                <div className="ms-auto text-warning">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
       
       
  );
}

export default Card1;
