import "./profile.css";
import "..//..//App.css";
import React, { useState, useRef, useEffect } from "react";
import Header from "..//Header_and_footer/header";
import image from "..//..//..//src/Asset/card_and_pack/back_empty.png";

import Cookies from 'js-cookie'

// const getUserName = () => {
//   return document.cookie
//     .split("; ")
//     .find((row) => row.startsWith("user_name="))
//     ?.split("=")[1];
// }

const getUserName = () => {
  return Cookies.get('user_name')
};

const getProfileData = () => {
  return fetch("http://51.38.32.47:8000/user/" + getUserName(), {
    credentials: "include"
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
};

function ProfilePage() {

  console.log("USERNAME: " + getUserName())

  // for user data
  const [profileData, setProfileData] = useState(null);
  const [profileLoading, setProfileLoading] = useState(true);
  const [profileError, setProfileError] = useState(null);

  useEffect(() => {
    fetch("http://51.38.32.47:8000/user/" + getUserName())
      .then(response => response.json())
      .then((userData) => {
        console.log(userData);
        setProfileLoading(false);
        setProfileData(userData);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`)
      });
  }, []);

  // for collection data
  const [collectionData, setCollectionData] = useState(null);
  const [collectionLoading, setCollectionLoading] = useState(true);
  const [collectionError, setCollectionError] = useState(null);

  useEffect(() => {
    fetch("http://51.38.32.47:8000/collection/" + 1)
      .then(response => response.json())
      .then((collData) => {
        console.log(collData);
        setCollectionLoading(false);
        setCollectionData(collData);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`)
      });
  }, []);

  // Avatar
  const [avatar, setAvatar] = useState(null);
  const fileInputRef = useRef();

  const handleAvatarChange = (event) => {
    const newAvatar = event.target.files[0];
    setAvatar(newAvatar);
  };

   const handleAvatarClick = () => {
    fileInputRef.current.click();
  };
  

  return (
    <div>
        <Header/> <br/><br/><br/><br/><br/>
     <div>
     <div className="profileContainer"> 
        <label htmlFor="avatar-input"></label>
        <div className="avatar-container" onClick={handleAvatarClick}>
          {avatar && <img className="avatar" src={URL.createObjectURL(avatar)} alt="Avatar" />}
          {!avatar && (
            <div className="avatar-placeholder">
              <div className="avatar-text">Deckpicture</div>
            </div>
          )}
        </div>
        <input
          id="avatar-input"
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
      
      <div>
        <label className="userinfo" >Welcome {profileData ? profileData.username : 'Person!'}</label> <br/>
        <label className="userinfo" >Card Collection : {collectionData ? collectionData.length : '?'}/20</label>
      </div>
      </div>
      </div>
      <div>
        
      </div>
      <div>
        <h3 className="justifyCenter"> Best Deck </h3> 
       
        <div className="collection-container">
            {collectionData ? "YES" : "NO"}
          <img src={image} className="collection-card" alt="empty card"/>
          <img src={image} className="collection-card" alt="empty card"/>
          <img src={image} className="collection-card" alt="empty card"/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
