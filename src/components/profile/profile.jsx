import React from "react";
import q from "./profile-image.jpg";
import s from "./profile.module.css";

const Profile = () => {
  return (
    <div className={s.box}>
      <div>{q}</div>

      <div>My posts</div>
      <div>New post</div>
      <div>
        <div>Post 1</div>
        <div>Post 2</div>
        <div>Post 3</div>
      </div>
    </div>
  );
};

export default Profile;
