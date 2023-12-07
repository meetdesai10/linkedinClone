import { Search } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import logo from "../../../public/linkedinlogo/logo.png";
import notification from "../../../public/header/nav-notifications.svg";
import message from "../../../public/header/nav-messaging.svg";
import jobs from "../../../public/header/nav-jobs.svg";
import network from "../../../public/header/nav-network.svg";
import home from "../../../public/header/nav-home.svg";
import me from "../../../public/header/user.svg";
import work from "../../../public/header/nav-work.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
const HeaderContainer = styled.div`
  padding: 5px 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 111111;
  @media (max-width: 576px) {
    padding: 10px 10px;
  }
  @media (min-width: 576px) {
    padding: 10px 40px;
  }
  @media (min-width: 992px) {
    padding: 10px 150px;
  }
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  .headerLink {
    img {
      height: 2.4rem;
      border-radius: 5px;
      @media (max-width: 768px) {
        height: 2rem;
      }
    }
  }
`;
const SearchInput = styled.div`
  width: 100%;
  margin-left: 10px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 0 5px;
  background-color: #dce0fc;
  transition: 0.4s all ease-in-out;
  & > input {
    height: 40px;
    width: 100%;
    font-size: 15px;
    padding-left: 10px;
    border: none;
    outline: none;
    background-color: transparent;
    @media (max-width: 768px) {
      height: 35px;
    }
  }
  &:focus-within {
    border: 1px solid blue;
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const Functions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 5px 0px;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    .headerLink {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: black;
      @media (max-width: 1218px) {
        p {
          display: none;
        }
      }
    }
    & > img {
      height: 25px;
      width: 25px;
      @media (max-width: 1165px) {
        height: 25px;
        width: 25px;
      }
    }
  }
  @media (max-width: 576px) {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #dce0fc;
    padding: 5px 0px;
    width: 100%;
    display: flex;
    gap: 0;
    z-index: 111111;
    justify-content: space-evenly;
  }
  @media (min-width: 576px) {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #dce0fc;
    padding: 5px 0px;
    width: 100%;
    display: flex;
    gap: 0;
    z-index: 111111;
    justify-content: space-evenly;
  }
  @media (min-width: 1050px) {
    position: static;
    background-color: white;
    width: 100%;
    display: flex;
    gap: 30px;
    z-index: 111111;
  }
  @media (min-width: 1222px) {
    position: static;
    background-color: white;
    width: 100%;
    display: flex;
    gap: 30px;
    z-index: 111111;
  }
`;
const Me = styled.div`
  position: relative;
  & > div {
    position: absolute;
    top: 50px;
    padding: 10px 25px;
    width: 70px;
    border-radius: 5px;
    color: blue;
    font-size: 17px;
    font-weight: 600;
    background-color: black;
    color: white;
    opacity: 0;
    transition: 0.4s all ease-in-out;
    @media (max-width: 992px) {
      top: -36px;
      right: 0px;
      padding: 6px 5px;
      font-size: 14px;
      width: 60px;
      opacity: 0;
    }
  }
  &:hover > div {
    opacity: 1;
  }
  @media (max-width: 1218px) {
    p {
      display: none;
    }
  }
`;
const Work = styled.div`
  cursor: pointer;
  & > div {
    width: 110px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media (max-width: 1218px) {
    p {
      display: none;
    }
  }
`;

const HeaderPages = styled.img`
  height: 25px;
  width: 25px;
`;
export default function Header() {
  let navigate = useNavigate();

  return (
    <HeaderContainer>
      <Left>
        <NavLink to={"/"} className="headerLink">
          <img src={logo} alt="" />
        </NavLink>
        <SearchInput>
          <Search />
          <input placeholder="Search" />
        </SearchInput>
      </Left>
      <Right>
        <Functions>
          <div>
            <NavLink to={"/"} className="headerLink">
              <HeaderPages src={home} alt="" />
              <p>Home</p>
            </NavLink>
          </div>
          <div>
            <NavLink to={"/mynetwork"} className="headerLink">
              <HeaderPages src={network} alt="" />
              <p>My Network</p>
            </NavLink>
          </div>
          <div>
            <NavLink to={"/jobs"} className="headerLink">
              <HeaderPages src={jobs} alt="" />
              <p>Jobs</p>
            </NavLink>
          </div>
          <div>
            <NavLink to={"/messaging"} className="headerLink">
              <HeaderPages src={message} alt="" />
              <p>Messaging</p>
            </NavLink>
          </div>
          <div>
            <NavLink to={"/notifications"} className="headerLink">
              <HeaderPages src={notification} alt="" />
              <p>Notification</p>
            </NavLink>
          </div>
          <Me>
            <img
              style={{
                height: "30px",
                width: "30px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
              src={me}
              alt=""
            />
            <p>Me</p>
            <div onClick={() => navigate("/login")}>Sign Out</div>
          </Me>
        </Functions>
        <Work>
          <div>
            <NavLink
              to={"/forbusiness"}
              style={{
                display: "flex",
                alignItems: "center",
                color: "black",
                textDecoration: "none",
                flexDirection: "column",
              }}
            >
              <img src={work} alt="" />
              <p>For Business</p>
            </NavLink>
          </div>
        </Work>
      </Right>
    </HeaderContainer>
  );
}
