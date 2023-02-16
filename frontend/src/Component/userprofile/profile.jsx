import "./profile.css";
import React, { useState, useRef } from "react";
import Header from "..//Header_and_footer/header";
import image from "..//..//..//src/Asset/card_and_pack/back_empty.png";

function ProfilePage() {
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState("");
  const fileInputRef = useRef(null);

  const handleAvatarChange = (event) => {
    const newAvatar = event.target.files[0];
    setAvatar(newAvatar);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };
  

  return (
    <div>
        <Header/> <br/><br/><br/><br/>
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
        <label htmlFor="name-input">Pseudo</label>
        <input id="name-input" type="text" value={name} onChange={handleNameChange} />
        {name.length > 0 && <div className="name-preview">Hello {name}</div>}
      </div>
      </div>
      </div>
      <div>
        
      </div>
      <div>
        <h3 className="justifyCenter"> Best Deck </h3> 
       
        <div className="collection-container">
          <img src={image} className="collection-card" alt="empty card"/>
          <img src={image} className="collection-card" alt="empty card"/>
          <img src={image} className="collection-card" alt="empty card"/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
