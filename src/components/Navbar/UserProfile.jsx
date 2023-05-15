import React from "react";
import profile from "../../assets/profile.jpg";
import { BiUserCircle } from "react-icons/bi";
const UserProfile = () => {
  return (
    <>
      {/* <img
        src={profile}
        alt="user-profile"
        style={{ width: "36px", borderRadius: "32px", cursor: "pointer" }}
      /> */}
      {/* <AiOutlineBell size={28} /> */}
      <BiUserCircle size={36} className="assibi_icon" />
      {/* <div></div> */}
    </>
  );
};
export default UserProfile;
