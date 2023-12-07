import React from "react";
import styled from "styled-components";

export default function TotalPageComponent({data}) {
  return (
    <div>
      <PageComponentContainer>
        <div className="profilePicture">
          <img
            src={data.profilePicture}
            alt=""
          />
        </div>
        <div className="Details">
          <div className="leftSide">
            <div className="name">{data.pageName}</div>
            <div className="Followers">{data.followers} followers</div>
          </div>
          <div className="rightSide">
            <button>Following</button>
          </div>
        </div>
      </PageComponentContainer>
    </div>
  );
}
const PageComponentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 3px 0px;
  margin: 10px 0px;
  .profilePicture {
    img {
      height: 70px;
      width: 70px;
      object-fit: cover;
      @media (max-width: 576px) {
        height: 40px;
        width: 40px;
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
        font-size: 18px;
        letter-spacing: 0.5px;
      }
      .Followers {
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
