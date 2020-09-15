import React, { Component } from "react";
import banner from "../../assets/media/images/banner.png";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="hero">
          <div className="hero_text">
            <p>CAPTURE YOUR BUSINESS MODEL ON A LEAN CANVAS</p>
            <h1>
              Communicate your idea clearly and concisely to others so they can
              get behind it.
            </h1>{" "}
            <h3>
              {" "}
              Lean Canvas helps you deconstruct your idea into a business model
              using 9 building blocks.
            </h3>
          </div>
          <div className="hero_image">
            <img src={banner} alt="" />
          </div>
        </div>
        <Link to="/canvas">
          <nobr>
          <div className="start_btn">
            <Button positive size="large" animated>
              <Button.Content visible>Get Started</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </div>
          </nobr>
        </Link>
      </div>
    );
  }
}

export default Home;
