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
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Explore your dream job opportunities with our JobHunt App — an
            platform-organizer designed to streamline your job applications and
            track your career journey seamlessly. Elevate your career path with
            us. Take the next step towards success. Join us on your journey to
            achieve new heights!
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
