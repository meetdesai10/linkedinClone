import React, { useState } from "react";
import styled from "styled-components";
import banner from "../../../public/homeleftside/card-bg.svg";
import ProfilePicture from "../../../public/ProfilePictures/image1.avif";
import connectionLogo from "../../../public/profilePage/btnLogo.svg";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import ContactModalInfo from "./contactComponent/ContactModalInfo";

export default function ProfileComponent() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ProfileComponentContainer>
      <div className="mainImages">
        <img className="bannerImg" src={banner} alt="" />
        <img className="profilePicture" src={ProfilePicture} alt="" />
      </div>
      <div className="userDetails">
        <div className="name">Meet Desai</div>
        <div className="location">
          Surat,Gujrat,India.{" "}
          <div className="contactInfo">
            <p onClick={handleOpen}>Contact info</p>
            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
              <DialogTitle
                style={{
                  fontWeight: "600",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>Meet Desai</div>
                <div
                  style={{ fontSize: "25px", cursor: "pointer" }}
                  onClick={handleClose}
                >
                  x
                </div>
              </DialogTitle>
              <hr />

              <DialogContent style={{ height: "300px" }}>
                <ContactModalInfo />
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="Connections">
          <span>36</span> Connections
        </div>
        <div className="buttons">
          <button className="Connect">
            <img src={connectionLogo} alt="" />
            Connect
          </button>
          <button className="Message">Message</button>
          <button className="More">More</button>
        </div>
      </div>
    </ProfileComponentContainer>
  );
}
const ProfileComponentContainer = styled.div`
  width: 70%;
  border-radius: 5px;
  border: 0.5px solid #dfdeda;
  .mainImages {
    position: relative;
    .bannerImg {
      width: 100%;
      border-radius: 5px;
    }
    .profilePicture {
      position: absolute;
      left: 30px;
      top: 120px;
      height: 150px;
      width: 150px;
      border-radius: 50%;
      border: 5px solid white;
      object-fit: cover;
    }
  }
  .userDetails {
    margin-left: 30px;
    margin-top: 70px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    .name {
      font-size: 25px;
    }
    .location {
      font-size: 13px;
      color: #666;
      letter-spacing: 1px;
      display: flex;
      gap: 10px;
      .contactInfo {
        p {
          font-weight: 600;
          color: #0a66c2;
          letter-spacing: 0.2px;
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
    .Connections {
      span {
        font-size: 15px;
      }
      color: #666;
      font-size: 13px;
    }
    .buttons {
      margin-top: 10px;
      display: flex;
      gap: 20px;
      .Connect {
        padding: 8px 20px;
        color: white;
        border-radius: 20px;
        background-color: #0a66c2;
        border: none;
        outline: none;
        font-size: 15px;
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
      }
      .Message {
        cursor: pointer;
        padding: 8px 20px;
        color: #0a66c2;
        border-radius: 20px;
        border: 1px solid #0a66c2;
        outline: none;
        font-size: 15px;
        transition: 0.2s all ease-in-out;
        &:hover {
          background-color: #0a66c2;
          color: white;
        }
      }
      .More {
        cursor: pointer;
        padding: 8px 20px;
        color: #666;
        border-radius: 20px;
        border: 1px solid #666;
        outline: none;
        font-size: 15px;
        transition: 0.2s all ease-in-out;
        &:hover {
          background-color: #666;
          color: white;
        }
      }
    }
  }
`;
