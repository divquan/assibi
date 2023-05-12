import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBRipple } from "mdb-react-ui-kit";
import image from "../../assets/meat.jpg";

const Card3 = ({ img, category }) => {
  return (
    // <MDBCol md="12" lg="4">
    //   <MDBRipple
    //     rippleColor="dark"
    //     rippleTag="div"
    //     className="bg-image rounded hover-zoom shadow-1-strong"
    //   >
    //     <img

    //       src={img}
    //       className="w-100"
    //       alt=""
    //       style={{ aspectRatio: "16/10" }}
    //     />

    //     <a href="#!">
    //       <div
    //         className="mask"
    //         style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
    //       >
    //         <div className="d-flex justify-content-start align-items-end h-100">
    //           <h5
    //             style={{ fontSize: 24 }}
    //             className="badge bg-light pt-2 ms-3 mt-3 mb-3 text-dark"
    //           >
    //             {category}
    //           </h5>
    //         </div>
    //       </div>
    //       <div className="hover-overlay">
    //         <div
    //           className="mask"
    //           style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
    //         ></div>
    //       </div>
    //     </a>
    //   </MDBRipple>
    // </MDBCol>
    <div
      className="card_1-container position-relative "
  
    >
      <img
        src={img}
        className="card_1-img w-100"
        style={{ aspectRatio: "16/10" }}
      />
      <h4
        className="card_1-label position-absolute p-1 "
        style={{
          bottom: "3px",
          left: "6px",
          backgroundColor: "white",
          borderRadius: "5px",
          objectFit:"cover"
        }}
      >
        {category}
      </h4>
    </div>
  );
};

export default Card3;
