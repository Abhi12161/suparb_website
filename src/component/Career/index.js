import React, { useEffect } from "react";
import career from "../../asset/images/infopage/career.png";
import Header from "../Header";
import ScrollButton from "../MoveToTopButton/ScrollButton";
import Footer from "../Footer/index";
import "./style.scss";

const Career = () => {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    mobileNumber: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setValues({
      ...values,
      file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!", values);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <ScrollButton />
      <Header />
      <div>
        <img src={career} alt="bcklogo" className="about-us-banner" />
        <h1 className="banner-imager-text">Career</h1>
      </div>
      <div className="career-maindiv">
        <div style={{ marginBottom: "80px" }}>
          <p className="page-heading">
            <span
              style={{
                fontFamily: "Prata",
                textDecoration: "underline",
                textUnderlineOffset: "15px",
                textDecorationThickness: "2px",
                textDecorationColor: "#FFD194",
                color: "#000000",
              }}
            >
              Come W
            </span>
            ork With Us!
          </p>
          <span className="page-text">
            <p>
              Our establishment is new but we have been active in the market for
              over a decade now, helping customers realise their dreams by
              managing their wealth in an efficient manner.
            </p>
            <p>
              It was in the year 2018, after a series of reforms (RERA, GST &
              Benami Transactions Act) ushered in a paradigm shift in the Real
              Estate Sector, we realised that we should drive our customers to
              the safest & the most profitable asset- Real Estate. Since then,
              we have been helping our clients plan for a new tomorrow by our
              disciplined, rigorous & research-based approach. We found our
              purpose in improving our customers’ financial well-being. Helping
              them plan for a better & brighter tomorrow & setting them onto the
              safest way to their dreams became our motto.
            </p>
            <p>
              The essence of this journey lies in the name ‘SeedWill’ itself.
              ‘Seed’ here denotes the wide array of services provided by us that
              help people realise their dreams (‘Will’). We offer valuable
              insights on how to manage wealth & achieve personal financial
              goals. From dynamic economic trends to investment outlook, we keep
              you informed about the significant developments determining
              today’s market and the risks & concerns associated with it.
            </p>
          </span>
        </div>
        <div style={{ marginBottom: "80px" }}>
          <p className="page-heading">
            <span
              style={{
                fontFamily: "Prata",
                textDecoration: "underline",
                textUnderlineOffset: "15px",
                textDecorationThickness: "2px",
                textDecorationColor: "#FFD194",
                color: "#000000",
              }}
            >
              Opport
            </span>
            unity
          </p>
          <span className="page-text">
            <p>
              Our establishment is new but we have been active in the market for
              over a decade now, helping customers realise their dreams by
              managing their wealth in an efficient manner.
            </p>
            <p>
              It was in the year 2018, after a series of reforms (RERA, GST &
              Benami Transactions Act) ushered in a paradigm shift in the Real
              Estate Sector, we realised that we should drive our customers to
              the safest & the most profitable asset- Real Estate. Since then,
              we have been helping our clients plan for a new tomorrow by our
              disciplined, rigorous & research-based approach. We found our
              purpose in improving our customers’ financial well-being. Helping
              them plan for a better & brighter tomorrow & setting them onto the
              safest way to their dreams became our motto.
            </p>
            <p>
              The essence of this journey lies in the name ‘SeedWill’ itself.
              ‘Seed’ here denotes the wide array of services provided by us that
              help people realise their dreams (‘Will’). We offer valuable
              insights on how to manage wealth & achieve personal financial
              goals. From dynamic economic trends to investment outlook, we keep
              you informed about the significant developments determining
              today’s market and the risks & concerns associated with it.
            </p>
          </span>
        </div>
        <div className="career-grid-container">
          <div className="career-grid-item">
            <p className="page-heading">
              <span
                style={{
                  fontFamily: "Prata",
                  textDecoration: "underline",
                  textUnderlineOffset: "15px",
                  textDecorationThickness: "2px",
                  textDecorationColor: "#FFD194",
                  color: "#000000",
                }}
              >
                We Are{" "}
              </span>
              Hiring!
            </p>
            <div className="contact-form-card">
              <span className="page-text">
                <span> PROFILE NAME : Gurugram</span>
                <p> Experience: 2-5 Yr Experience </p>
                <p>Job Description</p>
                <p>
                  Our establishment is new but we have been active in the market
                  for over a decade now, helping customers realise their dreams
                  by managing their wealth in an efficient manner.
                </p>
                <p>
                  It was in the year 2018, after a series of reforms (RERA, GST
                  & Benami Transactions Act) ushered in a paradigm shift in the
                  Real Estate Sector, we realised that we should drive our
                  customers to the safest & the most profitable asset- Real
                  Estate. Since then, we have been helping our clients plan for
                  a new tomorrow by our disciplined, rigorous & research-based
                  approach. We found our purpose in improving our customers’
                  financial well-being. Helping them plan for a better &
                  brighter tomorrow & setting them onto the safest way to their
                  dreams became our motto.
                </p>
                <p>
                  The essence of this journey lies in the name ‘SeedWill’
                  itself. ‘Seed’ here denotes the wide array of services
                  provided by us that help people realise their dreams (‘Will’).
                  We offer valuable insights on how to manage wealth & achieve
                  personal financial goals. From dynamic economic trends to
                  investment outlook, we keep you informed about the significant
                  developments determining today’s market and the risks &
                  concerns associated with it.
                </p>
              </span>
            </div>
          </div>
          <div className="career-grid-item">
            <p className="page-heading">
              <span
                style={{
                  fontFamily: "Prata",
                  textDecoration: "underline",
                  textUnderlineOffset: "15px",
                  textDecorationThickness: "2px",
                  textDecorationColor: "#FFD194",
                  color: "#000000",
                }}
              >
                DROP US{" "}
              </span>
              YOUR CV
            </p>
            <div className="contact-form-card">
              <form onSubmit={handleSubmit}>
                <div className="form-field">
                  <label className="label" htmlFor="name">
                    Name:
                  </label>
                  <input
                    className="input"
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label className="label" htmlFor="email">
                    Email:
                  </label>
                  <input
                    className="input"
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label className="label" htmlFor="mobileNumber">
                    Mobile Number:
                  </label>
                  <input
                    className="input"
                    type="text"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={values.mobileNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label className="label" htmlFor="file">
                    Upload File:
                  </label>
                  <div className="file-input-wrapper">
                    <input
                      className="file-input"
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleFileChange}
                    />
                    <div className="file-input-text">
                      {values.file
                        ? values.file.name
                        : "Drop file here or click to select"}
                    </div>
                  </div>
                </div>
                <div className="form-field">
                  <label className="label" htmlFor="message">
                    Message:
                  </label>
                  <textarea
                    className="textarea"
                    id="message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                  />
                </div>
                <button className="submit-button" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Career;
