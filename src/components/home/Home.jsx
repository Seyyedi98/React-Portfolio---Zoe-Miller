/* eslint-disable no-unused-vars */
import profileImg from "../../assets/profile-img.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

import "./home.css";
import { FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home__container container">
        <p className="home__subtitle text-cs">
          Hello,<span>My Name IS</span>
        </p>

        <h1 className="home__title text-cs">
          <span>ZOE</span> MILLER
        </h1>

        <p className="home__job">
          <span className="text-cs">I Am</span> <b>Web Developer</b>
        </p>

        <div className="home__img-wrapper">
          <div className="home__banner">
            <img src={profileImg} alt="" className="home__profile" />
          </div>

          <p className="home__data home__data-one">
            <span className="text-lg">
              12 <b>+</b>
            </span>
            <span className="text-sm texs-cs">
              Years of <span>Experience</span>
            </span>
          </p>

          <p className="home__data home__data-two">
            <span className="text-lg">330</span>
            <span className="text-sm texs-cs">
              Completed <span>Projects</span>
            </span>
          </p>

          <img src={shapeOne} className="shape shape__1" />
          <img src={shapeTwo} className="shape shape__2" />
          <img src={shapeTwo} className="shape shape__3" />
        </div>

        <p className="home__text">
          From Francec, Paris. I have rich experience in web design, also I am
          good at wordpress. I love to talk with you about our unique
        </p>

        <div className="home__socials">
          <a href="" className="home__social-link">
            <FaTwitter />
          </a>
          <a href="" className="home__social-link">
            <FaDribbble />
          </a>
          <a href="" className="home__social-link">
            <FaBehance />
          </a>
        </div>

        <div className="home__btns">
          <a href="" className="btn text-cs">
            Download CV
          </a>
          <a href="" className="hero__link text-cs">
            My Skills
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
