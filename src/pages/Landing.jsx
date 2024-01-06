import styled from "styled-components";
import Wrapper from "./../assets/wrappers/LandingPage";
import logo from "../assets/images/logo.png";
import main from "../assets/images/main.png";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="job hunt" className="logo" />
        <h5 className="logospan">Job Hunt</h5>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Discover your dream job with our job tracking app. We provide a
            seamless experience for managing your job search, connecting you
            with the latest opportunities, and helping you navigate your career
            path. Take the next step towards success. Join us on your path to success!
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
