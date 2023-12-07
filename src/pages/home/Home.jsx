import React from "react";
import styled from "styled-components";
import Header from "../../component/header/Header";
import { Container } from "@mui/material";
import HomeMain from "../../component/HomeComponents/HomeMain";
import HomeRightSide from "../../component/HomeComponents/HomeRightSide";
import HomeLeftSide from "../../component/HomeComponents/HomeLeftSide";
const HomeContainer = styled.div`
  padding: 0px 100px;
  @media (max-width: 576px) {
    padding: 10px 10px;
  }
  @media (min-width: 576px) {
    padding: 10px 40px;
  }
  @media (min-width: 992px) {
    padding: 10px 100px;
  }
`;
const HiringLine = styled.h3`
  text-align: center;
  margin-top: 20px;
  color: #91918e;
  cursor: pointer;
  text-decoration: underline;
  & > span {
    color: blue;
    text-decoration: underline;
  }
  @media (max-width: 992px) {
    font-size: 14px;
    padding: 0px 10px;
  }
`;
const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  margin: 25px 20px;
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    padding: 0px 5px;
  }
`;
export default function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <HiringLine>
          <span>Hiring in hurry? -</span>Find talented people in record time
          with Upwork and Keep business moving
        </HiringLine>
        <Layout>
          <HomeLeftSide />
          <HomeMain />
          <HomeRightSide />
        </Layout>
      </HomeContainer>
    </>
  );
}
