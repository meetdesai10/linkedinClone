import {
  Comment,
  MoreHoriz,
  Send,
  Share,
  ThumbUpAlt,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import postImg from "../../../public/post/postImage1.avif";
import postPrfileImg from "../../../public/header/user.svg";
export default function Post() {
  let [likeAction, setLikeAction] = useState(false);
  let [likeCounter, setLikeCounter] = useState(13);
  function likeActionHnadler() {
    setLikeAction(!likeAction);
    if (likeAction) {
      setLikeCounter(likeCounter - 1);
    } else {
      setLikeCounter(likeCounter + 1);
    }
  }
  return (
    <PostContainer>
      <PostHead>
        <div className="postHeadLeft">
          <img src={postPrfileImg} alt="" />
          <div>
            <h3>Meet desai</h3>
            <p>dmeet1008@gmail.com</p>
            <p>04/06/2023</p>
          </div>
        </div>
        <div className="postHeadRight">
          {" "}
          <MoreHoriz />{" "}
        </div>
      </PostHead>
      <PostDesc>Hello i am sharing this post</PostDesc>
      <PostImg>
        <img src={postImg} alt="" />
      </PostImg>
      <LikeComment>
        <div onClick={() => likeActionHnadler()}>
          {likeAction ? (
            <ThumbUpAlt className="icon" htmlColor="blue" />
          ) : (
            <ThumbUpOffAlt className="icon" htmlColor="blue" />
          )}
          <p>
            <b>{likeCounter} </b>Likes
          </p>
        </div>
        <div>
          <Share className="icon" htmlColor="blue" />
          <p>Share</p>
        </div>
        <div>
          <Comment className="icon" htmlColor="blue" />
          <p>
            <b>9</b>Comments
          </p>
        </div>
        <div>
          <Send className="icon" htmlColor="blue" />
          <p>Send</p>
        </div>
      </LikeComment>
    </PostContainer>
  );
}
const PostContainer = styled.div`
  margin-top: 15px;
  padding: 10px 0px;
  border-radius: 5px;
  border: 1px solid grey;
  box-shadow: 0px 0px 1px 1px grey;
`;
const PostHead = styled.div`
  display: flex;
  padding-left: 10px;
  justify-content: space-between;
  & > .postHeadLeft {
    display: flex;
    align-items: center;
    gap: 10px;
    & > img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }
    & > div {
      display: grid;
      gap: 2px;
    }
  }
`;
const PostDesc = styled.div`
  margin-top: 10px;
  color: #454443;
  font-weight: 500;
  font-size: 16px;
  padding-left: 10px;
`;
const PostImg = styled.div`
  margin-top: 10px;
  height: 45vh;
  & > img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    margin: 0;
    padding: 0;
  }
`;
const LikeComment = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 40px;
  align-items: center;
  padding-left: 10px;
  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    @media (max-width: 576px) {
      gap: 0px;
    }
    & > .icon {
      font-size: 28px;
      @media (max-width: 576px) {
        font-size: 16px;
      }
    }
    & > p {
      font-size: 17px;
      font-weight: 600;
      color: #454443;
      @media (max-width: 576px) {
        font-size: 12px;
      }
    }
  }
  @media (max-width: 576px) {
    gap: 20px;
  }
`;
