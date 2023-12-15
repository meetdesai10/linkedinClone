import React from "react";
import Header from "../../component/header/Header";
import ProfileComponent from "../../component/profile/ProfileComponent";
import styled from "styled-components";

export default function Profile() {
  return (
    <>
      <Header />
      <ProfilePageContainer>
        <ProfileComponent />
      </ProfilePageContainer>
    </>
  );
}

const ProfilePageContainer = styled.div`
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
