import React from "react";
import Header from "../../header/Header";
import styled from "styled-components";
import Image from "../../../../public/myNetworkNewLettersImages/nonewsLetters.jfif";
export default function Hashtags() {
  return (
    <>
      <Header />
      <HashtagsContainer>
        <div className="Heading">Hashtags</div>
        <hr
          style={{ width: "100%", height: "0.01px", backgroundColor: "#666" }}
        />
        <div className="MainPart">
          <img src={Image} alt="" />
          <h2>No Hashtags followed</h2>
          <p>Looks like you are not subscribed to any Hashtags.</p>
        </div>
      </HashtagsContainer>
    </>
  );
}
const HashtagsContainer = styled.div`
  margin: 10px 150px;
  border: 1px solid #e6e4e0;
  background-color: white;
  border-radius: 5px;
  width: 55%;
  @media (max-width: 576px) {
    margin: 10px 10px;
    width: 90%;
  }
  @media (min-width: 576px) {
    margin: 10px 40px;
    width: 90%;
  }
  @media (min-width: 992px) {
    margin: 10px 150px;
    width: 55%;
  }
  .Heading {
    padding: 8px 15px;
    font-size: 18px;
  }
  .MainPart{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px 0px;
    p{
      margin-top: 10px;
      color: #666;
    }
  }
`;
