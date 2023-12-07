import React, { useState } from "react";
import styled from "styled-components";
import eventBanner from "../../../../../public/EventPage/eventPopup.png";
import { Search } from "@mui/icons-material";
export default function CreateEventPopUp() {
  let [name, setName] = useState("");
  let [des, setDes] = useState("");
  let [rules, setRules] = useState("");
  let [linkCounter, setLinkCounter] = useState("");

  let [endTimeBoxAction, setEndTimeBoxAction] = useState(false);
  return (
    <CreateEventPopUpContainer>
      <div className="banner">
        <img src={eventBanner} alt="" />
      </div>
      <div className="eventtype">
        <div className="header">Event type</div>
        <div className="radio">
          <div className="online">
            <input
              style={{ height: "20px", width: "20px" }}
              type="radio"
              name="type"
            />
            <label htmlFor="">Online</label>
          </div>
          <div className="inPerson">
            <input
              style={{ height: "20px", width: "20px" }}
              type="radio"
              name="type"
            />
            <label htmlFor="">In person</label>
          </div>
        </div>
      </div>
      <div className="EventNameInput">
        <p className="fieldName">Event name *</p>
        <input
          type="text"
          onChange={(e) => setName(e?.target?.value)}
          placeholder="Inspiring Entrepreneurs in DC"
        />
        <div className="nameWordCounter">{name.length}/100</div>
      </div>
      <div className="addIndustry *">
        <p>Time Zone</p>
        <select name="" id="">
          <option value="">UTC -12:00 - Baker Island Time</option>
          <option value="">UTC -11:00 - Niue Time, Samoa Standard Time</option>
          <option value="">UTC -10:00 - Hawaii-Aleutian Standard Time</option>
          <option value="">UTC -09:00 - Alaska Standard Time</option>
          <option value="">UTC -08:00 - Pacific Standard Time</option>
          <option value="">UTC -07:00 - Mountain Standard Time</option>
          <option value="">Oil and Gas</option>
          <option value="">UTC -06:00 - Central Standard Time</option>
          <option value="">UTC -05:00 - Eastern Standard Time</option>
          <option value="">UTC -04:00 - Atlantic Standard Time</option>
          <option value="">
            UTC -03:00 - Argentine Time, Brasília Time, Chile Standard Time
          </option>
          <option value="">
            UTC -02:00 - Fernando de Noronha Time, South Georgia Time
          </option>
          <option value="">UTC -01:00 - Azores Time, Cape Verde Time</option>
          <option value="">
            UTC ±00:00 - Greenwich Mean Time, Western European Time
          </option>
          <option value="">
            UTC +01:00 - Central European Time, West Africa Time
          </option>
          <option value="">
            UTC +02:00 - Eastern European Time, Central Africa Time
          </option>
          <option value="">
            UTC +03:00 - Moscow Standard Time, East Africa Time
          </option>
          <option value="">UTC +04:00 - Gulf Standard Time, Samara Time</option>
          <option value="">
            UTC +05:00 - Pakistan Standard Time, Yekaterinburg Time
          </option>
          <option value="">
            UTC +06:00 - Bangladesh Standard Time, Omsk Time
          </option>
          <option value="">
            UTC +07:00 - Indochina Time, Novosibirsk Time
          </option>
          <option value="">
            UTC +08:00 - China Standard Time, Australian Western Standard Time
          </option>
          <option value="">
            UTC +09:00 - Japan Standard Time, Korea Standard Time
          </option>
          <option value="">
            UTC +10:00 - Australian Eastern Standard Time, Vladivostok Time
          </option>
          <option value="">UTC +11:00 - Norfolk Time, Magadan Time</option>
          <option value="">
            UTC +12:00 - New Zealand Standard Time, Fiji Time
          </option>
          <option value="">UTC +13:00 - Tonga Time</option>
          <option value="">UTC +14:00 - Line Islands Time</option>
        </select>
      </div>
      <div className="dateTime">
        <div className="Date">
          <div htmlFor="">Start date *</div>
          <input type="date" />
        </div>
        <div className="Time">
          <div htmlFor="">Start time *</div>
          <select name="" id="">
            <option value="">12:30AM</option>
            <option value="">01:00AM</option>
            <option value="">01:30AM</option>
            <option value="">02:00AM</option>
            <option value="">02:30AM</option>
            <option value="">03:00AM</option>
            <option value="">03:30AM</option>
            <option value="">04:00AM</option>
            <option value="">04:30AM</option>
            <option value="">05:00AM</option>
            <option value="">05:30AM</option>
            <option value="">06:00AM</option>
            <option value="">06:30AM</option>
            <option value="">07:00AM</option>
            <option value="">07:30AM</option>
            <option value="">08:00AM</option>
            <option value="">08:30AM</option>
            <option value="">09:00AM</option>
            <option value="">09:30AM</option>
            <option value="">10:00AM</option>
            <option value="">10:30AM</option>
            <option value="">11:00AM</option>
            <option value="">11:30AM</option>
            <option value="">12:00PM</option>
          </select>
        </div>
      </div>
      <div className="AddEndTimeDate">
        <input
          style={{ height: "20px", width: "20px" }}
          type="checkbox"
          onClick={() => setEndTimeBoxAction(!endTimeBoxAction)}
        />
        <label htmlFor="">Add end date and time</label>
      </div>
      {endTimeBoxAction ? (
        <div className="dateTime">
          <div className="Date">
            <div htmlFor="">End date *</div>
            <input type="date" />
          </div>
          <div className="Time">
            <div htmlFor="">End time *</div>
            <select name="" id="">
              <option value="">12:30AM</option>
              <option value="">01:00AM</option>
              <option value="">01:30AM</option>
              <option value="">02:00AM</option>
              <option value="">02:30AM</option>
              <option value="">03:00AM</option>
              <option value="">03:30AM</option>
              <option value="">04:00AM</option>
              <option value="">04:30AM</option>
              <option value="">05:00AM</option>
              <option value="">05:30AM</option>
              <option value="">06:00AM</option>
              <option value="">06:30AM</option>
              <option value="">07:00AM</option>
              <option value="">07:30AM</option>
              <option value="">08:00AM</option>
              <option value="">08:30AM</option>
              <option value="">09:00AM</option>
              <option value="">09:30AM</option>
              <option value="">10:00AM</option>
              <option value="">10:30AM</option>
              <option value="">11:00AM</option>
              <option value="">11:30AM</option>
              <option value="">12:00PM</option>
            </select>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="link">
        <p>External event link</p>
        <input
          type="text"
          placeholder="Add a Location to your Event"
          onChange={(e) => {
            setLinkCounter(e?.target?.value);
          }}
        />
        <div className="wordCounter">{linkCounter.length}/1024</div>
      </div>
      <div className="EventDescription">
        <p className="fieldName">Description *</p>
        <textarea
          placeholder="What is the purpose of your Event?"
          name=""
          id=""
          cols="30"
          rows="4"
          onChange={(e) => setDes(e?.target?.value)}
        ></textarea>
        <div className="desWordCounter">{des.length}/2,000</div>
      </div>
      <div className="speakers">
        <div className="Header">Speakers *</div>
        <div className="Inputs">
          <Search />
          <input type="text" name="" placeholder="" id="" />
        </div>
      </div>
      <div className="notes">
        <p>
          Add connections to speak at the event. Speakers can join the event
          early and will be shown in the event’s Details section and presenter
          area. They cannot allow attendees to speak or end the event.
        </p>
        <p>
          By continuing, you agree with <a href="">LinkedIn’s event policy.</a>{" "}
        </p>
        <p>
          Make the most of LinkedIn Events. <a href="">Learn more</a>{" "}
        </p>
      </div>
    </CreateEventPopUpContainer>
  );
}

const CreateEventPopUpContainer = styled.div`
  .banner {
    position: relative;
    img {
      width: 100%;
      cursor: pointer;
    }
  }

  .eventtype {
    margin-top: 20px;
    .radio {
      display: flex;
      gap: 20px;
    }
    .header {
      margin-bottom: 10px;
    }
    .online,
    .inPerson {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  .EventNameInput {
    margin-top: 20px;
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
  .EventDescription {
    margin-top: 20px;

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
    margin-top: 20px;
    select {
      margin-top: 5px;
      height: 30px;
      padding: 5px;
      border-radius: 5px;
      outline: none;
      width: 100%;
    }
  }
  .link {
    margin-top: 20px;
    input {
      margin-top: 5px;

      height: 30px;
      width: 100%;
      border-radius: 5px;
      border: 1px solid #666;
      outline: none;
      padding-left: 10px;
    }
    .wordCounter {
      text-align: end;
    }
  }
  .dateTime {
    margin-top: 20px;
    .Date {
      display: flex;
      flex-direction: column;
      input {
        height: 30px;
        width: 50%;
        font-size: 17px;
      }
    }
    .Time {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      select {
        height: 30px;
        width: 50%;
        font-size: 17px;
      }
    }
  }
  .AddEndTimeDate {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .speakers {
    margin-top: 20px;
    .Inputs {
      margin-top: 5px;
      display: flex;
      align-items: center;
      height: 30px;
      width: 100%;
      border: 1px solid #666;
      border-radius: 5px;
      padding-left: 5px;
    }
    input {
      height: 100%;
      width: 100%;
      outline: none;
      border: none;
      padding-left: 10px;
    }
  }
  .notes{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    p{
      font-size: 13px;
      color: #666;
      a{
        color: blue;
        text-decoration: none;
      }
    }
  }
`;
