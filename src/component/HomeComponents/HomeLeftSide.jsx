import { Add, Bookmark, PersonAdd } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import photo from "../../../public/homeleftside/photo.svg"
import card from "../../../public/homeleftside/card-bg.svg"
const LeftContainer = styled.div``;
const TopPart = styled.div`
  border-radius: 5px;
  border: 1px solid grey;
  box-shadow: 0px 0px 1px 1px grey;
`;
const BackgroundImage = styled.div`
  height: 70px;
  background: url(${card});
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  & > img {
    background-color: white;
    margin: 40px 35%;
    padding: 10px;
    border-radius: 50%;
  }
`;
const TextArea = styled.div`
  margin-top: 50px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
   p {
    color: blue;
    font-size: 14px;
    cursor: pointer;
  }
  h2{
    font-size: 18px;
  }
`;
const Connections = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const ConnectionText = styled.div`
  display: grid;
  gap: 5px;
  & > h4 {
    font-size: 18px;
    color: grey;
  }
  & > p {
    font-size: 17px;
    font-weight: 600;
  }
`;
const MyItems = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  transition: 0.2s all ease-in-out;
  & > p {
    font-size: 17px;
    font-weight: 600;
  }
  &:hover {
    background-color: #d9d8d4;
  }
`;
const BottomPart = styled.div`
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid grey;
  box-shadow: 0px 0px 1px 1px grey;
`;
const BottomText = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > p {
      font-weight: 600;
    }
  }
  & > p {
    font-weight: 600;
  }
`;
const DiscoverMore = styled.div`
  color: gray;
  padding: 10px;
  font-size: 17px;
  font-weight: 600;
`;
export default function HomeLeftSide() {
  return (
    <LeftContainer>
      <TopPart>
        <BackgroundImage>
          <img src={photo} alt="" />
        </BackgroundImage>

        <TextArea>
          <h2>Welcome, Meet Desai</h2>
          <p>add a photo</p>
        </TextArea>
        <hr />
        <Connections>
          <ConnectionText>
            <h4>Connections</h4>
            <p>Grow Your Network</p>
          </ConnectionText>
          <PersonAdd style={{ cursor: "pointer" }} />
        </Connections>
        <hr />
        <MyItems>
          <Bookmark htmlColor="#615e5e" style={{ fontSize: "25px" }} />
          <p>My Items</p>
        </MyItems>
      </TopPart>
      <BottomPart>
        <BottomText>
          <p>Group</p>
          <div>
            <p>Events</p>
            <Add style={{ fontSize: "30px" }} />
          </div>
          <p>Follows Hashtags</p>
        </BottomText>
        <hr />
        <DiscoverMore>Discover more</DiscoverMore>
      </BottomPart>
    </LeftContainer>
  );
}
