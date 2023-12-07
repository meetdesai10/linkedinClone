import React, { useState } from "react";
import styled from "styled-components";
import banner from "../../../../../public/CreateGroupPopUp/createGroupBanner.jfif";
import groupIcon from "../../../../../public/CreateGroupPopUp/groupIcon.png";
import pen from "../../../../../public/CreateGroupPopUp/pen.svg";
import radio from "../../../../../public/CreateGroupPopUp/radio.svg";
export default function CreateGroupPopUp() {
  let [name, setName] = useState("");
  let [des, setDes] = useState("");
  let [rules, setRules] = useState("");
  let [groupType, setGroupType] = useState("public");
  return (
    <CreateGroupPopUpContainer>
      <div className="banner">
        <div className="bannerPenLogo">
          <img className="" src={pen} alt="" />
        </div>
        <img className="bannerImg" src={banner} alt="" />
        <img className="groupIcon" src={groupIcon} alt="" />
        <div className="groupIconPenLogo">
          <img className="" src={pen} alt="" />
        </div>
      </div>
      <div className="indicatesRequired">* Indicates required</div>
      <div className="GroupNameInput">
        <p className="fieldName">Group name *</p>
        <input
          type="text"
          onChange={(e) => setName(e?.target?.value)}
          placeholder="Inspiring Entrepreneurs in DC"
        />
        <div className="nameWordCounter">{name.length}/100</div>
      </div>
      <div className="GroupDescription">
        <p className="fieldName">Description *</p>
        <textarea
          placeholder="What is the purpose of your group?"
          name=""
          id=""
          cols="30"
          rows="4"
          onChange={(e) => setDes(e?.target?.value)}
        ></textarea>
        <div className="desWordCounter">{des.length}/2,000</div>
      </div>
      <div className="addIndustry">
        <p>Industry (up to 3)</p>
        <select name="" id="">
          <option value="">--- Select Your Indstry ---</option>
          <option value="">It Services and It Consulting</option>
          <option value="">Hospitals and HelthCare</option>
          <option value="">Education Admistration programs</option>
          <option value="">Government Administration</option>
          <option value="">Advertising Services</option>
          <option value="">Accounting</option>
          <option value="">Oil and Gas</option>
          <option value="">Wellness and Fitness Services</option>
          <option value="">Food and Beverage Services</option>
          <option value="">Technology, Information and Internet</option>

          <option value="">Buisness Consulting and Services</option>
          <option value="">Primary and Secondary Eduction</option>

          <option value="">Retail apparel and fashion</option>
          <option value="">Food and Beverage Manufactuting</option>
          <option value="">Staffing and Recruting</option>
          <option value="">Architecture and planning</option>
          <option value="">Travel Arragements</option>
          <option value="">Amed Forces</option>
        </select>
      </div>
      <div className="loaction">
        <p>Location</p>
        <input type="text" placeholder="Add a Location to your group" />
      </div>
      <div className="rules">
        <p>rules</p>
        <textarea
          placeholder="What is the purpose of your group?"
          name=""
          id=""
          cols="30"
          rows="4"
          onChange={(e) => setRules(e?.target?.value)}
        ></textarea>
        <div className="ruledWordCounter">{rules.length}/4,000</div>
      </div>
      <div className="GroupType">
        <p className="Heading">Group type</p>
        <div className="public">
          <input
            style={{ height: "30px", width: "50px" }}
            type="radio"
            name="type"
            onChange={() => setGroupType("public")}
            checked={groupType == "public"}
          />
          <div className="publicText">
            <label htmlFor="">Public</label>
            <p>
              Anyone, on or off LinkedIn can see posts in the group. The group
              appears in search results and is visible to others on members’
              profiles.
            </p>
          </div>
        </div>
        <div className="private">
          <input
            style={{ height: "30px", width: "20px" }}
            type="radio"
            name="type"
            onChange={() => setGroupType("private")}
            checked={groupType == "private"}
          />
          <div className="privateText">
            <label htmlFor="">Private</label>
            <p>Only group members can see posts in the group</p>
          </div>
        </div>
        <div className="typeNote">
          <img src={radio} alt="" />
          <p>
            Group type can’t be changed once it’s created.{" "}
            <a href="">Learn more</a>
          </p>
        </div>
      </div>
      <div className="Discoverability">
        <div className="Heading">Discoverability</div>
        {groupType == "public" ? (
          <p>
            Public groups appear in search results and are visible to others on
            members’ profiles.
          </p>
        ) : (
          <div
            className="HideUnhide"
            style={{ display: groupType === "private" ? "block" : "none" }}
          >
            <div className="Listed">
              <input
                style={{ height: "30px", width: "50px" }}
                type="radio"
                name="Discoverability"
              />
              <div className="listedText">
                <label htmlFor="">Listed</label>
                <p>
                  The group appears in search results, is visible to others on
                  members’ profiles, and LinkedIn users can see whether a
                  connection is a member.
                </p>
              </div>
            </div>
            <div className="Unlisted">
              <input
                style={{ height: "30px", width: "50px" }}
                type="radio"
                name="Discoverability"
              />
              <div className="unListedText">
                <label htmlFor="">Unlisted</label>
                <p>
                  The group does not appear in search results for non-group
                  members and is not visible to non-group members on members’
                  profiles.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="Permissions">
        <div className="Heading">Permissions</div>
        <div className="box1">
          <input
            style={{ height: "30px", width: "30px" }}
            type="checkbox"
            checked
          />
          <div className="box1Text">
            <label htmlFor="">Allow members to invite their connections</label>
            <p>
              Group members can invite 1st degree connections to the group. All
              requests to join will still require admin approval.
            </p>
          </div>
        </div>
        <div className="box2">
          <input
            style={{ height: "30px", width: "30px" }}
            type="checkbox"
            checked
          />
          <div className="box2Text">
            <label htmlFor="">Require new posts to be reviewed by admins</label>
            <p>
              Members’ posts will require admin approval within 14 days before
              they become visible to others.
            </p>
          </div>
        </div>
      </div>
    </CreateGroupPopUpContainer>
  );
}

const CreateGroupPopUpContainer = styled.div`
  .banner {
    position: relative;
    .bannerPenLogo {
      position: absolute;
      top: 5%;
      right: 2%;
      height: 30px;
      width: 30px;
      background-color: white;
      border-radius: 50%;
      border: 1px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .bannerImg {
      height: 150px;
      width: 100%;
    }
    .groupIcon {
      position: absolute;
      border: 2px solid white;
      top: 90px;
      left: 20px;
      height: 80px;
      width: 80px;
    }
    .groupIconPenLogo {
      position: absolute;
      left: 15%;
      bottom: -20%;
      height: 30px;
      width: 30px;
      background-color: white;
      border-radius: 50%;
      border: 1px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }

  .indicatesRequired {
    margin-top: 40px;
    font-size: 14px;
    text-align: end;
  }
  .GroupNameInput {
    margin-top: 10px;
    input {
      height: 30px;
      width: 100%;
      border-radius: 5px;
      border: 1px solid #666;
      outline: none;
      padding-left: 10px;
    }
    .nameWordCounter {
      text-align: end;
      margin-top: 5px;
    }
  }
  .GroupDescription {
    margin-top: 10px;

    textarea {
      width: 100%;
      padding-left: 10px;
      padding-top: 10px;
      outline: none;
    }
    .desWordCounter {
      text-align: end;
      margin-top: 5px;
    }
  }
  .addIndustry {
    select {
      margin-top: 5px;
      height: 30px;
      padding: 5px;
      border-radius: 5px;
      outline: none;
    }
  }
  .loaction {
    margin-top: 30px;
    input {
      margin-top: 5px;

      height: 30px;
      width: 100%;
      border-radius: 5px;
      border: 1px solid #666;
      outline: none;
      padding-left: 10px;
    }
  }
  .rules {
    margin-top: 30px;
    textarea {
      margin-top: 5px;

      width: 100%;
      padding-left: 10px;
      padding-top: 10px;
      outline: none;
    }
    .ruledWordCounter {
      text-align: end;
    }
  }
  .GroupType {
    margin-top: 30px;
    .Heading {
      color: #666;
    }
    .public {
      margin-top: 10px;
      display: flex;
      align-items: start;
      .publicText {
        margin-left: 10px;

        label {
          font-size: 15px;
        }
        p {
          color: #666;
        }
      }
    }
    .private {
      margin-top: 10px;
      display: flex;
      align-items: start;

      .privateText {
        margin-left: 10px;

        label {
          font-size: 15px;
        }
        p {
          color: #666;
        }
      }
    }
  }
  .typeNote {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #f8fafd;
    width: 90%;
    border-radius: 5px;
    padding: 13px 10px;
    margin-top: 20px;

    p {
      font-size: 14px;
      a {
        text-decoration: none;
        font-weight: bold;
        color: blue;
        font-size: 14px;
      }
    }
  }

  .Discoverability {
    margin-top: 30px;
    .Heading {
      color: #666;
    }
    p {
      font-size: 14px;
      margin: 10px 0px;
    }
    .Listed {
      margin-top: 10px;
      display: flex;
      align-items: start;

      .listedText {
        margin-left: 10px;

        label {
          font-size: 15px;
        }
        p {
          color: #666;
        }
      }
    }
    .Unlisted {
      margin-top: 10px;
      display: flex;
      align-items: start;

      .unListedText {
        margin-left: 10px;

        label {
          font-size: 15px;
        }
        p {
          color: #666;
        }
      }
    }
  }
  .Permissions {
    margin-top: 30px;
    .Heading {
      color: #666;
    }
    .box1 {
      margin-top: 10px;
      display: flex;
      align-items: start;

      .box1Text {
        margin-left: 10px;

        label {
          font-size: 15px;
        }
        p {
          color: #666;
        }
      }
    }
    .box2 {
      margin-top: 10px;
      display: flex;
      align-items: start;

      .box2Text {
        margin-left: 10px;

        label {
          font-size: 15px;
        }
        p {
          color: #666;
        }
      }
    }
  }
`;
