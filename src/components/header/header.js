import React, { Component } from "react";
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        {/*generated code*/}
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            {/* <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a> */}
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Technical Skills
                </a>
              </li>
            </ul>{" "}
            {/* end #nav */}
          </nav>{" "}
          {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm {resumeData.name}.</h1>
              <h3>
                I am a <span>Software Developer </span> with extensive
                experience in developing applications and providing technical
                support to customers but am looking to progress my career as a{" "}
                <span>Front-end /.Net developer</span> Let's{" "}
                <a className="smoothscroll" href="#about">
                  start scrolling
                </a>
                and learn more{" "}
                <a className="smoothscroll" href="#about">
                  about me
                </a>{" "}
                .
              </h3>
              <hr />
              <ul className="social">
                <li>
                  <a
                    href="https://www.facebook.com/castilan.nikkoli"
                    target="_blank"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/nikkosci" target="_blank">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://nz.linkedin.com/in/nikkoli-castilan"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://join.skype.com/invite/g7SPg0Obk9CM"
                    target="_blank"
                  >
                    <i className="fa fa-skype" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
