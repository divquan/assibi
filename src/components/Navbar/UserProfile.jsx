import React from "react";
import profile from "../../assets/profile.jpg";

const UserProfile = () => {
  return (
    <>
      <img
        src={profile}
        alt="user-profile"
        style={{ width: "36px", borderRadius: "32px", cursor: "pointer" }}
      />
      {/* <AiOutlineBell size={28} /> */}

      <div></div>
    </>
  );
};
export default UserProfile;
