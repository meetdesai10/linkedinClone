import React from "react";
import MyNetworkLeftSide from "../../component/MyNetworkComponents/MyNetworkLeftSide";
import styled from "styled-components";
import InvitatinsNotifications from "../../component/MyNetworkComponents/InvitatinsNotifications";
import Header from "../../component/header/Header";
import MyNetworkConnect from "../../component/MyNetworkComponents/MyNetworkConnect";

export default function MyNetwork() {
  return (
    <>
      <Header />
      <MyNetworkContiner>
        <MyNetworkLeftSide />
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <InvitatinsNotifications />
          <MyNetworkConnect />
        </div>
      </MyNetworkContiner>
    </>
  );
}
const MyNetworkContiner = styled.div`
  padding: 10px 150px;
  display: flex;
  gap: 10px;
  @media (max-width: 576px) {
    padding: 10px 10px;
    flex-direction: column;
  }
  @media (min-width: 576px) {
    padding: 10px 40px;
    flex-direction: column;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 992px) {
    padding: 10px 150px;
  }
`;
