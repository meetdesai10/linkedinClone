import {
    AddPhotoAlternate,
    Article,
    Event,
    VideoCall,
  } from "@mui/icons-material";
  import React from "react";
  import styled from "styled-components";
  import feedProfile from "../../../public/header/user.svg"
  const FeedContainer = styled.div`
    padding: 20px;
    border-radius: 5px;
    border: 1px solid grey;
    box-shadow: 0px 0px 1px 1px grey;
    height: fit-content;
  `;
  const FeedTop = styled.div`
    display: flex;
    gap: 10px;
    & > img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }
    & > div {
      width: 100%;
      border: 1px solid gray;
      border-radius: 20px;
      & > input {
        outline: none;
        border: none;
        height: 90%;
        width: 90%;
        margin: 0px 15px;
        font-weight: 600;
        font-size: 15px;
        letter-spacing: 1px;
        @media (max-width: 576px) {
          width: 80%;
        }
  
      }
    }
  `;
  const FeedBottom = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & > p {
        font-weight: 600;
        letter-spacing: 0.5px;
        @media (max-width: 576px) {
          font-weight: 600;
          letter-spacing: 0px;
          font-size:13px;
        }
      }
      &> .icon{
        font-size: 33px;
        @media (max-width:576px) {
          font-size: 25px;
        }
      }
    }
  `;
  export default function Feed() {
    return (
      <FeedContainer>
        <FeedTop>
          <img src={feedProfile} alt="" />
          <div style={{backgroundColor:"white"}}>
            <input placeholder="Share a post" />
          </div>
        </FeedTop>
        <FeedBottom>
          <div>
            <AddPhotoAlternate className="icon" htmlColor="blue" />
            <p>Photo</p>
          </div>
          <div>
            <VideoCall className="icon" htmlColor="green" />
            <p>Video</p>
          </div>
          <div>
            <Event className="icon" htmlColor="tomatto" />
            <p>Event</p>
          </div>
          <div>
            <Article className="icon" htmlColor="pink" />
            <p>Write Article</p>
          </div>
        </FeedBottom>
      </FeedContainer>
    );
  }
  