import Wrapper from "./../assets/wrappers/LandingPage";
import { Logo } from "../components";
import main from "../assets/images/main.png";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <span>Simplify Your Job Tracking with</span>
          <h1>
            app <span>Organizer</span>
          </h1>
          <p>
            Optimize a streamlined job search experience with our all-in-one
            platform designed to manage applications seamlessly. Stay organized,
            track your career journey, and elevate your path to success. Join us
            on your journey to new heights!"
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
