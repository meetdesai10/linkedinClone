import React from "react";
import Header from "../../header/Header";
import styled from "styled-components";
import FollowingComponent from "./FollowingComponent/FollowingComponent";
import { FollowingData } from "../../../data/FollowingData";

export default function Following() {
  return (
    <>
      <Header />
      <FollowingContainer>
        <div className="FollowingPart">
          <div className="FollowingContainerHeader">Meet's Network</div>
          <hr
            style={{
              height: "0.01px",
              width: "100%",
            }}
          />
          <div className="FollowingFollowers">
            <div className="Following">Following</div>
            <div className="Followers">Followers</div>
          </div>
          <hr
            style={{
              height: "0.01px",
              width: "100%",
            }}
          />

          <div className="FollowerThatYouAreFollowingBack">
            You are following 2 people out of your network
          </div>
          <div className="followingLists">
            {FollowingData.map((e) => {
              return <FollowingComponent data={e} />;
            })}
          </div>
        </div>
      </FollowingContainer>
    </>
  );
}
const FollowingContainer = styled.div`
  padding: 10px 150px;
  width: 60%;

  @media (max-width: 576px) {
    padding: 0px 0px;
    width: 100%;
  }
  @media (min-width: 576px) {
    padding: 10px 40px;
  }
  @media (min-width: 992px) {
    padding: 10px 150px;
  }
  .FollowingPart {
    background-color: white;
    border: 1px solid #e6e4e0;
    border-radius: 5px;
    .FollowingContainerHeader {
      font-size: 20px;
      padding: 10px;
    }
    .FollowingFollowers {
      font-size: 15px;
      display: flex;
      gap: 20px;
      .Following,
      .Followers {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 10px;
        cursor: pointer;
        &:hover {
          background-color: #e6e4e0;
        }
      }
    }
    .FollowerThatYouAreFollowingBack {
      font-size: 14px;
      padding: 15px;
      color: #000;
      font-weight: 100;
      opacity: 0.6;
    }
    .followingLists {
      padding: 2px 20px;
    }
  }
`;
