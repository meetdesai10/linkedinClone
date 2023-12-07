import React from "react";
import Header from "../../header/Header";
import styled from "styled-components";
import TotalPageComponent from "./PagesComponents/TotalPageComponent";
import { HeaderPagesData } from "../../../data/HeaderPagesData";

export default function Pages() {
  return (
    <>
      <Header />
      <PagesContainer>
        <div className="pageCount">{HeaderPagesData.length} pages</div>
        <hr
          style={{ width: "100%", height: "0.01px", backgroundColor: "#666" }}
        />
        <div className="totalPages">
          {HeaderPagesData.map((e) => {
            return <TotalPageComponent key={e.profilePicture} data={e} />;
          })}
        </div>
      </PagesContainer>
    </>
  );
}

const PagesContainer = styled.div`
  margin: 10px 150px;
  width: 55%;
  border-radius: 5px;
  border: 1px solid #e6e4e0;
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
  background-color: white;
  .pageCount {
    font-size: 18px;
    padding: 15px 20px;
  }
  .totalPages {
    padding: 20px 30px;
    @media (max-width: 576px) {
    padding: 20px 10px;
  }
  }
`;
