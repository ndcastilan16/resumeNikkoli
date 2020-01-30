import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        {/*generated code*/}
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>
                I am a passionate developer who loves to innovate and buid
                applications to help a business automate their process, I love
                to learn new technologies during my spare time, although I don't
                have a solid commercial experience in front end development, I
                am still capable to deliver high quality applications that
                surpasess expectations, I'm also outgoing and love playing
                basketball when I'm not in front of my computer, I'm always
                dedicated with what I do and I always make sure to finish what I
                started.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Nikkoli Castilan</span>
                    <br />
                    <span>
                      23 Arcadia Crescent
                      <br />
                      Bayview Auckland, 0629
                    </span>
                    <br />
                    <span>0275513677</span>
                    <br />
                    <span>ndcastilan@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a
                      href="/files/Software Engineer - Nikkoli Castilan .docx"
                      className="button"
                    >
                      <i className="fa fa-download" />
                      Download Resume
                    </a>
                  </p>
                </div>
              </div>{" "}
              {/* end row */}
            </div>{" "}
            {/* end .main-col */}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
