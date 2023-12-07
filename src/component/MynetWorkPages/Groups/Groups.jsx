import React, { useState } from "react";
import Header from "../../header/Header";
import styled from "styled-components";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import CreateGroupPopUp from "./createGroupdPopUp/CreateGroupPopUp";

export default function Groups() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <GroupsContainer>
      <Header />
      <div className="groupContainerPart">
        <div className="left">
          <div className="yourGroup">Your groups</div>
          <div className="requested">Requested</div>
        </div>
        <div className="right">
          <Button variant="outlined" onClick={handleOpen}>
            Create Group
          </Button>
          <Dialog sx={{marginTop:"40px"}} open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Create Group</DialogTitle>
            <DialogContent style={{ height: "600px" }}>
              <CreateGroupPopUp />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Create
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </GroupsContainer>
  );
}
const GroupsContainer = styled.div`
  .groupContainerPart {
    border: 1px solid #e6e4e0;
    border-radius: 5px;
    width: 60%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    @media (max-width: 576px) {
      margin: 10px 10px;
      width: 90%;
    }
    @media (min-width: 576px) {
      margin: 10px 40px;
      width: 90%;
    }
    @media (min-width: 992px) {
      margin: 10px 150px;
      width: 60%;
    }
    .left {
      display: flex;
      align-items: center;
      gap: 20px;
      .yourGroup,
      .requested {
        padding: 12px 5px;
        cursor: pointer;
        color: #666;
        font-size: 15px;
        &:hover {
          background-color: #e6e4e0;
        }
      }
    }
  }
`;
