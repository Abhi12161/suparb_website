import React from "react";
import { Link } from "react-router-dom";
import "./Errorpage.scss";

const ErrorPage404 = () => {
  return (
    <>
      <div className="errordiv">
        <div className="mars"></div>
        <img
          src="https://assets.codepen.io/1538474/404.svg"
          alt="img"
          className="logo-404"
        />
        <img
          src="https://assets.codepen.io/1538474/meteor.svg"
          alt="img"
          className="meteor"
        />
        <p className="title">Oh no!!</p>
        <p className="subtitle">
          You`re either misspelling the URL <br /> or requesting a page that's
          no longer here.
        </p>
        <div align="center">
          <Link to="/">
            <a href="true" className="btn-back">Back to previous page</a>
          </Link>
        </div>
        <img
          src="https://assets.codepen.io/1538474/astronaut.svg"
          alt="img"
          className="astronaut"
        />
        <img
          src="https://assets.codepen.io/1538474/spaceship.svg"
          alt="img"
          className="spaceship"
        />
      </div>
    </>
  );
};

export default ErrorPage404;
