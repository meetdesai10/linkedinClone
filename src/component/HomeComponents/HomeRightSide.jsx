import { ArrowBack, ArrowForward, Tag } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
const RightMainContainer = styled.div``;
const RightContainer = styled.div`
  padding: 20px;
  border-radius: 5px;
  border: 1px solid grey;
  box-shadow: 0px 0px 1px 1px grey;
  height: fit-content;
`;
const RightTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    font-size: 18px;
    font-weight: 600;
  }
  & > img {
    height: 25px;
    width: 25px;
  }
`;
const RightMiddleFlex = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;
  & > .tag {
    height: 40px;
    width: 40px;
    border: 7px solid #54b9e8;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #cee8f0;
    & > .tagIcon {
      font-size: 30px;
      @media (max-width: 576px) {
        font-size: 20px;
      }
    }
    @media (max-width: 576px) {
      height: 30px;
      width: 30px;
      border-radius: 4px solid #54b9e8;
    }
  }
  & > .RightMiddleText {
    display: flex;
    flex-direction: column;
    gap: 5px;
    & > p {
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 0.5px;
      @media (max-width: 576px) {
        font-size: 12px;
      }
    }
    & > button {
      padding: 8px 20px;
      font-size: 15px;
      font-weight: 600;
      background-color: white;
      border-radius: 20px;
      border: 1px solid black;
      cursor: pointer;
      @media (max-width: 576px) {
        padding: 5px 10px;
        font-size: 12px;
      }
    }
  }
`;
const RightBottom = styled.div`
  & > div {
    display: flex;
    align-items: center;
    color: blue;
    cursor: pointer;
    margin-top: 10px;
    @media (max-width: 576px) {
      font-size: 14px;
    }
  }
`;
const EmptyBox = styled.div`
margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid grey;
  box-shadow: 0px 0px 1px 1px grey;
  height: fit-content;
`;
export default function HomeRightSide() {
  return (
    <RightMainContainer>
      <RightContainer>
        <RightTop>
          <div>Add to your feed</div>
          <img src="./public/homerightside/feed-icon.svg" alt="" />
        </RightTop>
        <RightMiddleFlex>
          <div className="tag">
            <Tag className="tagIcon" />
          </div>
          <div className="RightMiddleText">
            <p>#Linkedin</p>
            <button>Follow</button>
          </div>
        </RightMiddleFlex>
        <RightMiddleFlex>
          <div className="tag">
            <Tag className="tagIcon" />
          </div>
          <div className="RightMiddleText">
            <p>#Video</p>
            <button>Follow</button>
          </div>
        </RightMiddleFlex>
        <RightBottom>
          <div>
            View all recommendations <ArrowForward />{" "}
          </div>
        </RightBottom>
      </RightContainer>
      <EmptyBox></EmptyBox>
    </RightMainContainer>
  );
}
