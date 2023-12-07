import React from "react";
import styled from "styled-components";
import deleteIcon from "../../../public/connectionPage/delete.svg";
export default function MyNetworkConnectionCard({ data }) {
  return (
    <>
      <MyNetworkConnectionCardContainer>
        <div className="profilePicture">
          <img src={data.profilePicture} alt="" />
        </div>
        <div className="Details">
          <div className="leftSide">
            <div className="name">{data.name}</div>
            <div className="work">{data.work}</div>
            <div className="connectivityTime">connected 1 hour ago</div>
          </div>
          <div className="rightSide">
            <button>Message</button>
            <div className="dotsDiv">
              <img src={deleteIcon} alt="" />
            </div>
          </div>
        </div>
      </MyNetworkConnectionCardContainer>
      <hr
        style={{ width: "100%", height: "0.01px", backgroundColor: "#666" }}
      />
    </>
  );
}
const MyNetworkConnectionCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 3px 0px;
  .profilePicture {
    img {
      height: 80px;
      width: 80px;
      border-radius: 50%;
      object-fit: cover;
      @media (max-width: 576px) {
        height: 60px;
        width: 60px;
      }
    }
  }
  .Details {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .leftSide {
      display: flex;
      flex-direction: column;
      gap: 2px;
      .name {
        font-size: 17px;
        font-weight: 500;
        letter-spacing: 0.5px;
      }
      .work {
        font-size: 13px;
        color: #666;
        font-weight: 500;
        @media (max-width: 576px) {
          font-size: 11px;
        }
      }
    }
    .connectivityTime {
      font-size: 13px;
      color: #666;
      font-weight: 500;
      @media (max-width: 576px) {
        font-size: 11px;
      }
    }
  }
  .rightSide {
    display: flex;
    align-items: center;
    gap: 10px;
    button {
      padding: 7px 20px;
      border: 2px solid #0a66c2;
      border-radius: 20px;
      color: #0a66c2;
      font-size: 15.5px;
      background-color: white;
      transition: 0.3s all ease-in;
      cursor: pointer;
      &:hover {
        background-color: #d1e0eb;
      }
      @media (max-width: 576px) {
        padding: 5px 10px;
        font-size: 12px;
      }
    }
    .dotsDiv {
      cursor: pointer;
    }
    @media (max-width: 576px) {
      gap: 2px;
    }
  }
`;
