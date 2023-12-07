import React from "react";
import styled from "styled-components";
import ConnectionCard from "../cards/ConnectionCard";
import { connectionData } from "../../data/ConnectinData";
export default function MyNetworkConnect() {
  return (
    <MyNetworkConnectContainer>
      <div className="heading">
        <div className="leftSide">Software Engineers you may know</div>
        <div className="rightSide">see all</div>
      </div>
      <div className="connectionCardMap">
        {
          connectionData.map((e)=>{
            return <ConnectionCard data={e} />
          })
        }
      </div>
    </MyNetworkConnectContainer>
  );
}
const MyNetworkConnectContainer = styled.div`
  padding: 10px 20px;
  width: 100%;
  border: 0.5px solid #dfdeda;
  background-color: white;
  border-radius: 5px;
  margin: 10px 0px;
  background-color: white;
  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    .leftSide {
      font-size: 18px;
    }
    .rightSide {
      font-size: 17px;
      border-radius: 5px;
      padding: 5px;
      cursor: pointer;
      &:hover {
        background-color: #dfdeda;
      }
    }
  }
  .connectionCardMap{
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
    justify-content: center;
  }
`;
