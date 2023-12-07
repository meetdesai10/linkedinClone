import React from "react";
import Header from "../../header/Header";
import styled from "styled-components";
import Search from "../../../../public/connectionPage/search.svg";
import MyNetworkConnectionCard from "../../cards/MyNetworkConnectionCard";
import { connectionData } from "../../../data/ConnectinData";
export default function Connection() {
  return (
    <>
      <Header />
      <ConnectionsContainer>
        <div className="padding">
          <div className="connections">200 Connections</div>
          <div className="connectionsMainPart">
            <div className="leftConnectionsMainPart">
              <p>Sort By :</p>
              <select name="" id="">
                <option value="">Recently added</option>
                <option value="">Frist Name</option>
                <option value="">Last Name</option>
              </select>
            </div>
            <div className="rightConnectionsMainPart">
              <div className="searchField">
                <img src={Search} alt="" />
                <input type="text" placeholder="Search By Name" />
              </div>
              <div className="rightConnectionsMainPartText">
                Search With Filters
              </div>
            </div>
          </div>
        </div>
        <hr
          style={{ width: "100%", height: ".1px", backgroundColor: "#666" }}
        />
        <div className="connectionCardComponent">
          {connectionData.map((e) => {
            return <MyNetworkConnectionCard key={e.profilePicture} data={e} />;
          })}
        </div>
      </ConnectionsContainer>
    </>
  );
}
const ConnectionsContainer = styled.div`
  margin: 10px 150px;
  width: 60%;
  border: 1px solid #e6e4e0;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (max-width: 576px) {
    margin: 10px 10px;
    width: 90%;
  }
  @media (min-width: 576px) {
    width: 90%;
    margin: 10px 40px;
  }
  @media (min-width: 992px) {
    margin: 10px 150px;
    width: 60%;
  }
  .padding {
    padding: 10px;
    .connections {
      font-size: 20px;
      @media (max-width: 576px) {
        font-size: 17px;
        font-weight: 600;
      }
    }
    .connectionsMainPart {
      display: flex;
      justify-content: space-between;
      .leftConnectionsMainPart {
        display: flex;
        align-items: center;
        gap: 10px;
        p {
          color: #666;
          font-size: 16px;
          @media (max-width: 576px) {
            font-size: 15px;
          }
        }
        select {
          color: #666;
          outline: none;
          border: none;
          border-radius: 5px;
          padding: 8px;
          font-size: 14px;
          background-color: white;
        }

        option {
          color: #333;
          font-size: 12px;
        }
      }
      .rightConnectionsMainPart {
        display: flex;
        align-items: center;
        gap: 10px;
        .searchField {
          padding: 5px 10px;
          display: flex;
          align-items: center;
          background-color: #f8fafd;
          border-radius: 5px;
          input {
            background-color: transparent;
            outline: none;
            border: none;
            height: 30px;
            width: 200px;
            padding-left: 10px;
            @media (max-width: 576px) {
              width: 150px;
            }
          }
        }
        .rightConnectionsMainPartText {
          color: blue;
          cursor: pointer;
          font-size: 13px;
          @media (max-width: 576px) {
            font-size: 13px;
          }
        }
      }
      @media (max-width: 576px) {
        flex-direction: column;
        gap: 10px;
      }
      @media (min-width: 576px) {
        flex-direction: column;
      }
      @media (min-width: 992px) {
        flex-direction: row;
      }
    }
  }
  .connectionCardComponent {
    padding: 5px 15px;
  }
`;
