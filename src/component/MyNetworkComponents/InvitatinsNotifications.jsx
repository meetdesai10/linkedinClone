import React from "react";
import styled from "styled-components";

export default function InvitatinsNotifications() {
  return (
    <InvitatinsNotificationsContainer>
      <div className="text">No pending invitations</div>
      <div className="manage">Manage</div>
    </InvitatinsNotificationsContainer>
  );
}
const InvitatinsNotificationsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: fit-content;
  width: 100%;
  padding: 10px 20px;
  border: 0.5px solid #dfdeda;
  border-radius: 5px;
  .text{
    font-size: 18px;
    font-weight: 500;
  }
  .manage{
    font-size: 16px;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background-color: #dfdeda;
    }
  }
`;
