import React, { Component } from "react";
import styles from "../css/Quote.module.css";
import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";
import { withTheme } from "styled-components";

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestedItems: "",
      fname: "",
      lname: "",
      email: "",
      phone: "",
      date: undefined,
      startTime: undefined,
      endTime: undefined,
      inflateType: "dry",
      envType: "indoor",
      homeAddress: "",
      homeCity: "",
      homeZip: "",

      eventAddress: "",
      eventCity: "",
      eventZip: "",
      message: "",
      tosChecked: false,
    };
  }
  componentDidMount = () => {
    const { list } = this.props;
    console.log(list);
    let filteredList = [];
    list.forEach((item) => {
      filteredList.push(`${item.name} - $${item.price} \n`);
    });
    filteredList = filteredList.join("");
    this.setState({
      requestedItems: filteredList,
    });
  };

  handleOnChange = (event) => {
    const target = event.target;
    const value = target.name === "tosChecked" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { handleOnClick } = this.props;
    const {
      fname,
      lname,
      email,
      phone,
      date,
      startTime,
      endTime,
      inflateType,
      envType,
      homeAddress,
      homeCity,
      homeZip,
      eventAddress,
      eventCity,
      eventZip,
      message,
      tosChecked,
      requestedItems,
    } = this.state;
    console.log(this.state);

    return (
      <div className={styles.container}>
        <form
          action="https://formspree.io/mvorwnwo"
          method="POST"
          className={styles.form}
        >
          <div className={styles.buttonRow}>
            <IconContext.Provider
              value={{
                size: "36px",
              }}
            >
              <button className={styles.closeButton} onClick={handleOnClick}>
                <IoMdClose />
              </button>
            </IconContext.Provider>
          </div>
          <h1> Get A Quote</h1>
          <p>
            Please fill out the required fields and read the Terms and Services
            agreement at the bottom of the form.
          </p>
          <p>Your list will be attached to the inquiry automatically.</p>
          <div className={styles.column}>
            <div className={styles.invisItem}>
              <textarea
                readOnly
                name="requestedItems"
                value={requestedItems}
                rows="15"
                cols="30"
                placeholder="Your message here..."
              />
            </div>
            <div className={styles.formItem}>
              <label>First Name:</label>
              <input
                required
                type="text"
                name="fname"
                value={fname}
                onChange={this.handleOnChange}
                className={styles.formControl}
                placeholder="Peter"
              />
            </div>
            <div className={styles.formItem}>
              <label>Last Name:</label>
              <input
                required
                type="text"
                name="lname"
                value={lname}
                onChange={this.handleOnChange}
                className={styles.formControl}
                placeholder="Sherman"
              />
            </div>
            <div className={styles.formItem}>
              <label>Email:</label>
              <input
                required
                type="email"
                name="email"
                value={email}
                onChange={this.handleOnChange}
                className={styles.formControl}
                placeholder="email@email.com"
              />
            </div>
            <div className={styles.formItem}>
              <label>Phone Number:</label>
              <input
                required
                type="tel"
                name="phone"
                value={phone}
                onChange={this.handleOnChange}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="999-867-5309"
                className={styles.formControl}
              />
            </div>
            <div className={styles.formItem}>
              <label>Date of Event:</label>
              <input
                required
                type="date"
                name="date"
                value={date}
                onChange={this.handleOnChange}
                className={styles.formControl}
              />
            </div>
            <div className={styles.formItem}>
              <label>Start Time:</label>
              <input
                required
                type="text"
                name="startTime"
                value={startTime}
                onChange={this.handleOnChange}
                className={styles.formControl}
                placeholder="12:00am"
              />
            </div>
            <div className={styles.formItem}>
              <label>End Time:</label>
              <input
                required
                type="text"
                name="endTime"
                value={endTime}
                onChange={this.handleOnChange}
                className={styles.formControl}
                placeholder="12:00pm"
              />
            </div>
            <div className={styles.formItem}>
              <label>Inflatable type needed:</label>
              <select
                name="inflateType"
                className={styles.formControl}
                value={inflateType}
                onChange={this.handleOnChange}
              >
                <option value="dry">Dry</option>
                <option value="wet">Wet</option>
              </select>
            </div>
            <div className={styles.formItem}>
              <label>Indoor or Outdoor?</label>
              <select
                name="envType"
                className={styles.formControl}
                value={envType}
                onChange={this.handleOnChange}
              >
                <option value="indoor">Indoor</option>
                <option value="outdoor">Outdoor</option>
              </select>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.formItem}>
              <label>Home Address:</label>
              <input
                required
                type="text"
                name="homeAddress"
                value={homeAddress}
                onChange={this.handleOnChange}
                className={styles.formControl}
                placeholder="42 Wallaby Way"
              />
            </div>
            <div className={styles.formItem}>
              <label>City:</label>
              <input
                required
                type="text"
                name="homeCity"
                value={homeCity}
                onChange={this.handleOnChange}
                className={styles.formControl}
                placeholder="Sydney"
              />
            </div>
            <div className={styles.formItem}>
              <label>Zip:</label>
              <input
                required
                type="text"
                name="homeZip"
                value={homeZip}
                onChange={this.handleOnChange}
                className={styles.formControl}
                placeholder="36285"
              />
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.formItem}>
              <label>Event Address:</label>
              <input
                required
                type="text"
                name="eventAddress"
                value={eventAddress}
                onChange={this.handleOnChange}
                className={styles.formControl}
                placeholder="528 Dixie Ave"
              />
            </div>
            <div className={styles.formItem}>
              <label>City:</label>
              <input
                required
                type="text"
                name="eventCity"
                value={eventCity}
                onChange={this.handleOnChange}
                className={styles.formControl}
                placeholder="West Union"
              />
            </div>
            <div className={styles.formItem}>
              <label>Zip:</label>
              <input
                required
                type="text"
                name="eventZip"
                value={eventZip}
                onChange={this.handleOnChange}
                className={styles.formControl}
                placeholder="43095"
              />
            </div>
            <div className={styles.column}>
              <label>Additional message or details:</label>
              <textarea
                required
                name="message"
                onChange={this.handleOnChange}
                value={message}
                rows="15"
                cols="30"
                placeholder="Your message here..."
              />
            </div>
          </div>
          
          <div className={styles.tos}>
            <h3>Terms of Service</h3>
            <p>
              *By checking the box below, you are acknowledging that you have
              read and understand the statements below.
            </p>
            <p>
              *You have measured the area to ensure that there is adaquate space
              available to set up equipment.
            </p>
            <p>
              *You understand that the security deposit will be held if
              equipment is returned damaged or dirty.
            </p>
            <p>
              *You understand Southern Ohio inflatables retains the right to
              cancel due to weather concerns.
            </p>
            <p>
              *You understand that you will forfeit your security deposit
              if you choose to cancel a booking unless weather conditions arise
              and both parties agree that it is unsuitable or unsafe to proceed
              with a booking.
            </p>
            <p>
              *You understand that should you wish to change a booking, a
              request has to made within 7 days of the event.
            </p>
            <p>
              *You understand that for the inflatables the site must be clean
              and free of grass clippings, branches, doggy poop,
              stones(inflatables can only be set up on concrete, dirt or
              blacktop) or anything that may puncture or rub a hole in the
              inflatable.
            </p>
            <p>* You have read the FAQ page and understand the basic utility requirements for equiptment.</p>
          </div>
          <div className={styles.row}>
            <input
              required
              type="checkbox"
              name="tosChecked"
              checked={tosChecked}
              onChange={this.handleOnChange}
            />
            <label className={styles.checkboxText}>
              I have read in full and agree to the Terms of Service.
            </label>
          </div>
          <div>
            <input
              type="submit"
              value="Submit Quote"
              className={styles.btnSec}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Quote;
