import React, { useState } from "react";
import pencil from "../../../../public/profilePage/contactInfo/pencil.svg";
import linkedin from "../../../../public/profilePage/contactInfo/linkedin.svg";
import email from "../../../../public/profilePage/contactInfo/email.svg";
import calendar from "../../../../public/profilePage/contactInfo/calendar.svg";
import styled from "styled-components";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import ContactEditModal from "./contactEditModal/ContactEditModal";
export default function ContactModalInfo() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ContactModalContainer>
      <div className="modalHeader">
        <div style={{ fontSize: "20px", marginBottom: "10px" }}>
          Contact info
        </div>
        <div>
          <img
            style={{ cursor: "pointer" }}
            src={pencil}
            alt=""
            onClick={handleOpen}
          />
          <Dialog sx={{marginTop:"40px"}} open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle
              style={{
                fontWeight: "600",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin:"0",
                padding:"0px 10px"
              }}
            >
              <div>Edit contact info</div>
              <div
                style={{ fontSize: "25px", cursor: "pointer" }}
                onClick={handleClose}
              >
                x
              </div>
            </DialogTitle>
            <hr />
            <DialogContent
              style={{ height: "500px", width: "100%" }}
            >
              <ContactEditModal/>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="modalBottom">
        <div className="details">
          <img src={linkedin} alt="" />
          <div className="miniDetails">
            <div>Your Profile</div>
            <a href="">link</a>
          </div>
        </div>
        <div className="details">
          <img src={email} alt="" />
          <div className="miniDetails">
            <div>Email</div>
            <a href="">dmeet1008@gmail.com</a>
          </div>
        </div>
        <div className="brithday">
          <img src={calendar} alt="" />
          <div className="miniDetails">
            <div>Brithday</div>
            <a href="">link</a>
          </div>
        </div>
      </div>
    </ContactModalContainer>
  );
}
const ContactModalContainer = styled.div`
  .modalHeader {
    display: flex;
    justify-content: space-between;
  }
  .modalBottom {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .details {
      display: flex;
      gap: 20px;
      .miniDetails {
        display: flex;
        flex-direction: column;
        gap: 10px;
        a {
          text-decoration: none;
          color: blue;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .brithday {
      display: flex;
      gap: 20px;
      .miniDetails {
        display: flex;
        flex-direction: column;
        gap: 10px;
        a {
          text-decoration: none;
          color: #666;
        }
      }
    }
  }
`;
