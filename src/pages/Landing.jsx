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
            If you use a package manager like yarn that supports the
            "resolutions" package.json field, we also highly recommend you add
            an entry to it as well corresponding to the major version range.
            This helps avoid an entire class of problems that arise from
            multiple versions of styled-components being installed in your
            project.
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
