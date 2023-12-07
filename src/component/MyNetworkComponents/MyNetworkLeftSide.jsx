import React, { useState } from "react";
import styled from "styled-components";
import { networkData } from "../../data/MyNetworkData";
import { useNavigate } from "react-router-dom";
export default function MyNetworkLeftSide() {
  let [actionToHideBar, setActionToHideBar] = useState(true);
  let navigate = useNavigate();
  return (
    <>
      <MyNetworkLeftSideContainer>
        <div className="MyNetworkLeftSide">
          <div className="heading">Manage my network</div>
          {actionToHideBar ? (
            <div className="mapSection">
              {networkData.map((e, i) => {
                return (
                  <div
                    className="networkSideBarData"
                    onClick={() => navigate(e.render)}
                  >
                    <NetworkSideBarLogo src={e.icon} alt="" />
                    <div className="section">{e.section}</div>
                  </div>
                );
              })}
            </div>
          ) : null}
          <button
            className="btnToHideBar"
            onClick={() => setActionToHideBar(!actionToHideBar)}
          >
            show {actionToHideBar ? "less" : "more"}{" "}
            {actionToHideBar ? (
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                fill="grey"
                stroke="none"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M0 0h48v48H0z" fill="none" />{" "}
                  <g id="Shopicon">
                    {" "}
                    <g>
                      {" "}
                      <polygon points="6.586,30.585 9.414,33.413 24,18.827 38.586,33.413 41.414,30.585 24,13.171 " />{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            ) : (
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                fill="grey"
                stroke="none"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M0 0h48v48H0z" fill="none" />{" "}
                  <g id="Shopicon">
                    {" "}
                    <g>
                      {" "}
                      <polygon points="24,29.171 9.414,14.585 6.586,17.413 24,34.827 41.414,17.413 38.586,14.585 " />{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            )}
          </button>
        </div>
        <div className="MyNetworkRightSide"></div>
      </MyNetworkLeftSideContainer>
    </>
  );
}
const MyNetworkLeftSideContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  border: 0.5px solid #dfdeda;
  width: 370px;
  position: sticky;
  top: 77px;
  height: fit-content;
  @media (max-width: 576px) {
    margin: 10px 10px;
    width: 100%;
    position: static;

  }
  @media (min-width: 576px) {
    position: static;
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 370px;
    position: sticky;
  }
  .MyNetworkLeftSide {
    .heading {
      font-size: 17px;
      letter-spacing: 1px;
      margin: 10px;
    }
    .mapSection {
      display: flex;
      flex-direction: column;
      gap: 5px;
      .networkSideBarData {
        display: flex;
        padding: 10px 20px;
        gap: 15px;
        cursor: pointer;
        align-items: center;
        &:hover {
          background-color: #dfdeda;
        }
        .section {
          font-size: 17px;
          color: #616161;
        }
      }
    }
  }
  .btnToHideBar {
    padding: 5px 15px;
    margin: 15px;
    display: flex;
    font-size: 17px;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    color: #616161;
    border: 0;
    border-radius: 5px;
    background-color: transparent;
    &:hover {
      background-color: #dfdeda;
    }
  }
`;
const NetworkSideBarLogo = styled.img`
  height: 25px;
  width: 25px;
`;
