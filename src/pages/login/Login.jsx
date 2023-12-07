import styled from "styled-components";
import React from "react";
import loginLogo from "../../../public/linkedinLogo/NavLogo.png"
import loginRightSide from "../../../public/linkedinLogo/login-hero.svg"
import google from "../../../public/linkedinLogo/google.svg"
const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  @media (max-width: 576px) {
    padding: 0px 10px;
  }
  & > img {
    height: 6rem;
    cursor: pointer;
    @media (max-width: 576px) {
      height: 4rem;
    }
  }
`;
const NavButtons = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const JoinBtn = styled.button`
  padding: 10px 25px;
  border-radius: 20px;
  border: none;
  background-color: white;
  color: grey;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.4s all ease-in-out;
  &:hover {
    background-color: grey;
    color: white;
  }
  @media (max-width: 576px) {
    padding: 8px 20px;
    font-size: 16px;
  }
`;
const SignInBtn = styled.button`
  padding: 10px 25px;
  border-radius: 20px;
  border: 2px solid blue;
  background-color: white;
  color: blue;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    border: 2px solid blue;
    background-color: blue;
    color: white;
  }
  @media (max-width: 576px) {
    padding: 8px 20px;
    font-size: 16px;
  }
`;
// main part

const MainPage = styled.div`
  display: flex;
  padding: 10px 30px;
  @media (max-width: 576px) {
    flex-direction: column;
    padding: 10px 0px;
    gap: 20px;
  }
`;
const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  gap: 100px;
  @media (max-width: 576px) {
    gap: 20px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
  }
  & > h1 {
    font-size: 50px;
    color: blue;
    @media (max-width: 576px) {
      font-size: 18px;
    }
  }
`;
const LeftSideImg = styled.div`
  transition: 0.4s all ease-in-out;
  display: flex;
  align-items: center;
  background-color: #f0eded;
  width: fit-content;
  padding: 13px 30px;
  color: grey;
  border-radius: 20px;
  gap: 10px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #d9d7d7;
    color: black;
  }
`;
const RightSide = styled.div`
  flex: 1;
  & > img {
    height: 90%;
    @media (max-width: 576px) {
      height: 100%;
    }
  }
`;

export default function Login() {
  return (
    <Container>
      <Nav>
        <img src={loginLogo} alt="" />
        <NavButtons>
          <JoinBtn>Join now</JoinBtn>
          <SignInBtn>Sign in</SignInBtn>
        </NavButtons>
      </Nav>
      <MainPage>
        <LeftSide>
          <h1>Welcome to your professional community</h1>
          <LeftSideImg>
            <img src={google} alt="" />
            <h3>Sign in with google </h3>
          </LeftSideImg>
        </LeftSide>
        <RightSide>
          <img src={loginRightSide} alt="" />
        </RightSide>
      </MainPage>
    </Container>
  );
}
