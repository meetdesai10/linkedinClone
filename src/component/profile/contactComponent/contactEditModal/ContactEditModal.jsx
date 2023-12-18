import { Delete } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";
import styled from "styled-components";

export default function ContactEditModal() {
  let [websiteOptions, setWebsiteOptions] = useState([]);
  let [messagingOptions, setMessagingOptions] = useState([]);
  const generateWebsiteOption = () => {
    let uniqueKey = Math.random().toString(36).substring(2, 9);
    return {
      id: uniqueKey,
      content: (
        <>
          <FormGroup>
            <Label for="examplePassword" style={{ color: "#666" }}>
              Website Url
            </Label>
            <Input
              id="examplePassword"
              placeholder="Enter your Website Url"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect" style={{ color: "#666" }}>
              Website type
            </Label>
            <Input id="exampleSelect" name="select" type="select">
              <option>Personal</option>
              <option>Company</option>
              <option>RSS feed</option>
              <option>Portfolio</option>
              <option>Other</option>
            </Input>
          </FormGroup>
        </>
      ),
    };
  };
  function addWebsiteOption() {
    const newWebsiteOption = generateWebsiteOption();
    setWebsiteOptions([...websiteOptions, newWebsiteOption]);
  }
  function removeWebsiteOption(uniqeId) {
    let data = websiteOptions.filter((ele) => ele.id !== uniqeId);
    setWebsiteOptions(data);
  }
  const generateMessageOption = () => {
    let uniqueKey = Math.random().toString(36).substr(2, 9);
    return {
      id: uniqueKey,
      content: (
        <>
          <FormGroup>
            <Label for="examplePassword" style={{ color: "#666" }}>
              Username
            </Label>
            <Input
              id="examplePassword"
              placeholder="Enter username"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect" style={{ color: "#666" }}>
              Service
            </Label>
            <Input id="exampleSelect" name="select" type="select">
              <option>skype</option>
              <option>ICQ</option>
              <option>Google Hangouts</option>
              <option>QQ</option>
              <option>WeChat</option>
            </Input>
          </FormGroup>
        </>
      ),
    };
  };
  function addMessageOption() {
    let data = generateMessageOption();
    setMessagingOptions([...messagingOptions, data]);
  }
  function removeMessagingOption(index) {
    let messagingData = messagingOptions.filter((ele, i) => i !== index);
    setMessagingOptions(messagingData);
  }
  return (
    <ContactEditModalCOntainer>
      <div className="profileUrl mb-4 ">
        <div className="mb-2" style={{ color: "#666" }}>
          Profile Url
        </div>
        <div className="" style={{ color: "blue", cursor: "pointer" }}>
          https://www.linkedin.com/in/meet-desai-1843aa29a
        </div>
      </div>
      <div className="email mb-3">
        <div className="mb-2" style={{ color: "#666" }}>
          Email
        </div>
        <div className="" style={{ color: "blue", cursor: "pointer" }}>
          dmeet1008@gmail.com
        </div>
      </div>
      <FormGroup>
        <Label for="examplePassword" style={{ color: "#666" }}>
          Phone
        </Label>
        <Input
          id="examplePassword"
          placeholder="Enter your  phone number"
          type="text"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect" style={{ color: "#666" }}>
          Phone type
        </Label>
        <Input id="exampleSelect" name="select" type="select">
          <option>--Please Select--</option>
          <option>Home</option>
          <option>Work</option>
          <option>Mobile</option>-{" "}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword" style={{ color: "#666" }}>
          Address
        </Label>
        <Input
          id="examplePassword"
          placeholder="Enter your  address"
          type="textarea"
        />
      </FormGroup>
      <Label for="exampleSelect" style={{ color: "#666" }}>
        Brithday
      </Label>
      <div className="d-flex w-100 justify-content-between gap-2">
        <FormGroup style={{ width: "100%" }}>
          <Input id="exampleSelect" name="select" type="select">
            <option>Month</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </Input>
        </FormGroup>
        <FormGroup style={{ width: "100%" }}>
          <Input id="exampleSelect" name="select" type="select">
            <option>Day</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
          </Input>
        </FormGroup>
      </div>
      <div className="addWebsite mt-3">
        <p className="fs-5">Website</p>
        {websiteOptions.map((option, index) => {
          return (
            <div key={index}>
              {option.id}
              {option.content}
              <Button
                className="bg-danger mt-3 mb-3 p-1"
                onClick={() => removeWebsiteOption(option.id)}
              >
                {" "}
                <Delete /> Remove
              </Button>
            </div>
          );
        })}
        <Button className="p-2" onClick={() => addWebsiteOption()}>
          + Add Website
        </Button>
      </div>
      <div className="addWebsite mt-4">
        <p className="fs-5">Instant Messaging</p>
        {messagingOptions.map((option, index) => {
          return (
            <div key={index}>
              {option.content}
              <Button
                className="bg-danger mt-3 mb-3 p-1"
                onClick={() => removeMessagingOption(option.id)}
              >
                <Delete /> Remove
              </Button>
            </div>
          );
        })}

        <Button className="p-2" onClick={() => addMessageOption()}>
          + add messaging option
        </Button>
      </div>
    </ContactEditModalCOntainer>
  );
}
const ContactEditModalCOntainer = styled.div``;
