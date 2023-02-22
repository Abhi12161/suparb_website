import { Link, useParams } from "react-router-dom";

import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import ScrollButton from "../MoveToTopButton/ScrollButton";
import blogs from "../../asset/images/blog.png";
import recentpost from "../../asset/images/recentpost.png";

import { useDispatch, useSelector } from "react-redux";
import { blogSelector } from "../../redux/reducer/blog";
import "./style.scss";
import { fetchBlog } from "../../redux/action/blog";
import { fetchBlogContent } from "../../redux/action/blogContent";
import { recentBlogsSelector } from "../../redux/reducer/recentBlogs";
import { fetchRecentBlogs } from "../../redux/action/recentBlogs";

const Blog = () => {
  const dispatch = useDispatch();
  const { blog } = useSelector(blogSelector);
  const { recentBlogs } = useSelector(recentBlogsSelector);

  // console.log(`recentBlogs`, recentBlogs);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    dispatch(fetchBlog());
    dispatch(fetchRecentBlogs());
  }, [dispatch]);

  const [showText, setShowText] = useState(false);

  const toggleShowText = () => {
    setShowText(!showText);
  };

  return (
    <div>
      <ScrollButton />
      <Header />
      <div className="blog">
        <img src={blogs} alt="bcklogo" className="blog-banner" />
        <div style={{ position: "absolute" }}>
          <h1 className="banner-imager-text">Blogs</h1>
          <h1 className="banner-imager-texts" style={{ marginTop: "20%" }}>
            #LATESTUPDATE
          </h1>
          <h1 className="banner-imager-texts">
            REAL ESTATE NEWS & INFORMATION THAT MATTERS
          </h1>
        </div>

        <div className="blogs-model-box" style={{ marginTop: "20px" }}>
          <div>
            {blog.length > 0
              ? blog.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="blogs-model"
                      onClick={() => dispatch(fetchBlogContent(item.id))}
                    >
                      <Link to={`/blog/${item.slug}/`} className="linkclass">
                        <div className="blog-list">
                          <div style={{ display: "flex", width: "100%" }}>
                            <img
                              src={item.img_url}
                              alt="card"
                              style={{
                                borderTopLeftRadius: "6px",
                                borderBottomLeftRadius: "6px",
                                width: "300px",
                              }}
                            />

                            <div className="blog-list-container">
                              <p
                                style={{ fontSize: "12px", fontWeight: "600" }}
                              >
                                {item.title}
                              </p>
                              <p
                                style={{
                                  color: "#505050",
                                  fontSize: "12px",
                                  fontWeight: "500",
                                  fontFamily: "Montserrat",
                                }}
                                dangerouslySetInnerHTML={{
                                  __html: showText
                                    ? item.post_content
                                    : item.post_content.slice(0, 400) + "...",
                                }}
                                className="htmlfrombackhand"
                              />
                              <p
                                style={{
                                  color: "#6AA74D",
                                  fontSize: "13px",
                                  cursor: "pointer",
                                }}
                                onClick={toggleShowText}
                              >
                                {showText ? "Read Less" : "Read More"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })
              : ""}
          </div>

          <div>
            <div className="most-recent-post">
              <h2
                style={{
                  padding: "10px",
                  fontWeight: "500",
                  fontSize: "16px",
                  fontFamily: "Montserrat",
                  color: "#000000",
                }}
              >
                Most Recent Post
              </h2>

              <div>
                {recentBlogs?.map((item, index) => {
                  return (
                    <Link to={`/blog/${item.slug}/`} className="linkclass">
                      <div
                        className="most-recent-card"
                        key={index}
                        onClick={() => dispatch(fetchBlogContent(item.id))}
                      >
                        <img
                          src={item.img_url}
                          alt="recent-post"
                          className="most-recent-img"
                          // onError={addImageFallback}
                        />

                        <div className="most-recent-container">
                          <p>{item.title}</p>
                          <p style={{ color: "#8B8B8B" }}>{item.created}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="subscribe-card">
                <div style={{ padding: "10px" }}>
                  <p>Subscribe</p>
                  <input type="email" placeholder="enter your email id" />
                  <input
                    type="submit"
                    style={{ color: "#FFFFFF", background: "#6AA74D" }}
                  />
                </div>
              </div>

              <div
                className="most-recent-post"
                style={{ marginTop: "10px" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
