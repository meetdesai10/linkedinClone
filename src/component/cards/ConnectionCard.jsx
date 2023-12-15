import React from "react";
import styled from "styled-components";
import profile from "../../../public/connectionCardImages/image.avif";
import profileBackground from "../../../public/homeleftside/card-bg.svg";
import mutualLogo from "../../../public/connectionCardImages/mutualLogo.svg";
import connectionLogo from "../../../public/connectionCardImages/connectBtnLogo.svg";
export default function ConnectionCard({ data }) {
  return (
    <ConnectionCardContainer>
      <div className="images">
        <img src={data.banner} alt="" className="backgroundImage" />
        <img src={data.profilePicture} alt="" className="profilePicture" />
      </div>
      <Details>
        <div className="name">{data.name}</div>
        <div className="work">{data.work}</div>
        <div className="mutualConnection">
          <img src={mutualLogo} alt="" />
          <p>{data.mutualConnection} mutual connection</p>
        </div>
        <button className="connectBtn">
          <img src={connectionLogo} alt="" />
          <p>Connect</p>
        </button>
      </Details>
    </ConnectionCardContainer>
  );
}
const ConnectionCardContainer = styled.div`
  position: relative;
  width: 190px;
  border-radius: 10px;
  border: 1px solid #efefef;
  &:hover {
    box-shadow: 0px 0px 5px 2px #efefef;
  }
  .images {
    .backgroundImage {
      height: 70px;
      width: 100%;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    }
    .profilePicture {
      cursor: pointer;
      position: absolute;
      top: 20px;
      left: 45px;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;
const Details = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .name {
    font-size: 18px;
    font-weight: 500;
  }
  .work {
    font-size: 17px;
    color: #666;
    letter-spacing: 0.3px;
  }
  .mutualConnection {
    margin-top: 20px;
    color: #666;
    display: flex;
    gap: 10px;
  }
  .connectBtn {
    margin: 15px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 30px;
    width: 170px;
    border: 2px solid blue;
    border-radius: 20px;
    color: #0a66c2;
    p {
      font-size: 16px;
    }
  }
`;
