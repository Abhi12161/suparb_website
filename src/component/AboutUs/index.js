import React, { useEffect } from "react";
import aboutus from "../../asset/images/infopage/aboutus.png";
import Header from "../Header";
import ScrollButton from "../MoveToTopButton/ScrollButton";
import Footer from "../Footer/index";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import "./style.scss";

const AboutUs = () => {
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
        <img src={aboutus} alt="bcklogo" className="about-us-banner" />
        <h1 className="banner-imager-text">About Us</h1>
      </div>
      <div className="about-us-maindiv">
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
              Establi
            </span>
            shed
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
              Our Vis
            </span>
            ion
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
              Our Miss
            </span>
            ion
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
              Timelin
            </span>
            e
          </p>
          <div className="timeline-container">
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineOppositeContent className="timeline-date-text">
                  20/9/2018
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="timeline-card-container">
                    <span className="timeline-heading">
                      <span className="timeline-heading-text">
                        Introducing SeedWill
                      </span>
                    </span>
                    <span className="timeline-text">
                      Lorem ipsum dolor sit amet consectetur. Ipsum sed molestie
                      aliquam enim nulla. Massa nunc lorem laoreet semper
                      egestas elementum auctor. Dictumst tellus elementum
                      feugiat non lacinia cursus elit. Massa nulla lorem in
                      posuere bibendum in. Fames euismod enim est viverra neque.{" "}
                    </span>
                  </div>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent className="timeline-date-text">
                  20/9/2018
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  {" "}
                  <div className="timeline-card-container">
                    <span className="timeline-heading">
                      <span className="timeline-heading-text">
                        Introducing SeedWill
                      </span>
                    </span>
                    <span className="timeline-text">
                      Lorem ipsum dolor sit amet consectetur. Ipsum sed molestie
                      aliquam enim nulla. Massa nunc lorem laoreet semper
                      egestas elementum auctor. Dictumst tellus elementum
                      feugiat non lacinia cursus elit. Massa nulla lorem in
                      posuere bibendum in. Fames euismod enim est viverra neque.{" "}
                    </span>
                  </div>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent className="timeline-date-text">
                  20/9/2018
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  {" "}
                  <div className="timeline-card-container">
                    <span className="timeline-heading">
                      <span className="timeline-heading-text">
                        Introducing SeedWill
                      </span>
                    </span>
                    <span className="timeline-text">
                      Lorem ipsum dolor sit amet consectetur. Ipsum sed molestie
                      aliquam enim nulla. Massa nunc lorem laoreet semper
                      egestas elementum auctor. Dictumst tellus elementum
                      feugiat non lacinia cursus elit. Massa nulla lorem in
                      posuere bibendum in. Fames euismod enim est viverra neque.{" "}
                    </span>
                  </div>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent className="timeline-date-text">
                  20/9/2018
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  {" "}
                  <div className="timeline-card-container">
                    <span className="timeline-heading">
                      <span className="timeline-heading-text">
                        Introducing SeedWill
                      </span>
                    </span>
                    <span className="timeline-text">
                      Lorem ipsum dolor sit amet consectetur. Ipsum sed molestie
                      aliquam enim nulla. Massa nunc lorem laoreet semper
                      egestas elementum auctor. Dictumst tellus elementum
                      feugiat non lacinia cursus elit. Massa nulla lorem in
                      posuere bibendum in. Fames euismod enim est viverra neque.{" "}
                    </span>
                  </div>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
